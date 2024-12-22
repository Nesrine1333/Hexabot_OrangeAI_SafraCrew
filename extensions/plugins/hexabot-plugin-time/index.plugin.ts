import { Block } from '@/chat/schemas/block.schema';
import { Context } from '@/chat/schemas/types/context';
import {
  OutgoingMessageFormat,
  StdOutgoingEnvelope,
  StdOutgoingTextEnvelope,
} from '@/chat/schemas/types/message';
import { BlockService } from '@/chat/services/block.service';
import { BaseBlockPlugin } from '@/plugins/base-block-plugin';
import { PluginService } from '@/plugins/plugins.service';
import { PluginBlockTemplate } from '@/plugins/types';
import { SettingService } from '@/setting/services/setting.service';
import { Injectable } from '@nestjs/common';

import SETTINGS from './settings';

@Injectable()
export class CurrentTimePlugin extends BaseBlockPlugin<typeof SETTINGS> {
  template: PluginBlockTemplate = {
    patterns: ['/.+/'],
    starts_conversation: false,
    name: 'Current Time Plugin',
  };

  constructor(
    pluginService: PluginService,
    private readonly blockService: BlockService,
    private readonly settingService: SettingService,
  ) {
    super('currenttime-plugin', pluginService);
  }

  getPath(): string {
    return __dirname;
  }

  async process(
    block: Block,
    context: Context,
    _convId: string,
  ): Promise<StdOutgoingEnvelope> {
    const settings = await this.settingService.getSettings();
    const args = this.getArguments(block);

    const calendlyResponse = await fetch(
      "https://api.calendly.com/scheduling_links",
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + args.token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          max_event_count: 1,
          owner: "https://api.calendly.com/event_types/7288d571-6f3b-4719-9d0c-3a8adc0950c7",
          owner_type: "EventType"
        })
      }
    );

    const calendlyData = await calendlyResponse.json();
    context.vars.link = calendlyData.resource.booking_url;

    /*
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', { hour12: false });
    */

    const response: string =
      this.blockService.getRandom([...args.response_message]) + context.vars.link;

    const msg: StdOutgoingTextEnvelope = {
      format: OutgoingMessageFormat.text,
      message: {
        text: this.blockService.processText(
          response,
          context,
          {},
          settings,
        ),
      },
    };

    return msg;
  }
}