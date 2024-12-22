import { Block } from '@/chat/schemas/block.schema';
import { Context } from '@/chat/schemas/types/context';
import {
  OutgoingMessageFormat,
  StdOutgoingEnvelope,
  StdOutgoingQuickRepliesEnvelope,
} from '@/chat/schemas/types/message';
import {
  QuickReplyType,
  StdQuickReply,
} from '@/chat/schemas/types/quick-reply';
import { BlockService } from '@/chat/services/block.service';
import { SubscriberService } from '@/chat/services/subscriber.service';
import { BaseBlockPlugin } from '@/plugins/base-block-plugin';
import { PluginService } from '@/plugins/plugins.service';
import { PluginBlockTemplate } from '@/plugins/types';
import { SettingService } from '@/setting/services/setting.service';
import { Injectable } from '@nestjs/common';
import SETTINGS from './settings';

@Injectable()
export class JustPlugin extends BaseBlockPlugin<typeof SETTINGS> {
  template: PluginBlockTemplate = {
    patterns: ['time'],
    starts_conversation: true,
    name: 'Get Event Types',
  };

  constructor(
    pluginService: PluginService,
    private readonly blockService: BlockService,
    private readonly settingService: SettingService,
    private readonly subscriberService: SubscriberService,
  ) {
    super('event-types-plugin', pluginService);
  }

  getPath(): string {
    return __dirname;
  }

  async process(
    block: Block,
    context: Context,
    _convId: string,
  ): Promise<StdOutgoingEnvelope> {
    const args = this.getArguments(block);
    const settings = await this.settingService.getSettings();

    const params = new URLSearchParams({
      user: 'https://api.calendly.com/users/4eff9ab6-ea27-4924-9e75-8a23a3aa5513',
    });
    console.log('vars' + context.vars.location);

    const eventTypes = await fetch(
      `https://api.calendly.com/event_types?${params.toString()}`,
      {
        headers: {
          Authorization: 'Bearer [your_calendly_access_token]',
          'Content-Type': 'application/json',
        },
      },
    );
    const response = await eventTypes.json();
    // const resp = JSON.stringify(response);
    const quickReplies = response.collection.map(
      (event): StdQuickReply => ({
        content_type: QuickReplyType.text,
        title: event.name,
        payload: event.name,
      }),
    );
    const typesArray = await response.collection.map(
      (event): EventType => ({
        uri: event.uri,
        name: event.name,
      }),
    );
    context.vars.typesarray = JSON.stringify(typesArray);

    console.log('user id' + context.user.id);
    await this.subscriberService.updateOne(context.user.id, {
      context: context,
    });

    // const blockMessage: BlockMessage =
    //   false && block.options.fallback
    //     ? [...block.options.fallback.message]
    //     : Array.isArray(block.message)
    //       ? [...block.message]
    //       : { ...block.message };

    const msg: StdOutgoingQuickRepliesEnvelope = {
      format: OutgoingMessageFormat.quickReplies,
      message: {
        text: this.blockService.processText('zertyuio', context, {}, settings),
        quickReplies: quickReplies.map((qr: StdQuickReply) => {
          return qr.title
            ? {
                ...qr,
                title: this.blockService.processText(
                  qr.title,
                  context,
                  {},
                  settings,
                ),
              }
            : qr;
        }),
      },
    };

    return msg;
  }
}

interface EventType {
  name: string;
  uri: string;
}
