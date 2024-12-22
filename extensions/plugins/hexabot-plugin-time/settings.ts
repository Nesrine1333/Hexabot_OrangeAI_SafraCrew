import { PluginSetting } from '@/plugins/types';
import { SettingType } from '@/setting/schemas/types';

export default [
  {
    label: 'response_message',
    group: 'default',
    type: SettingType.multiple_text,
    value: ['Scheduling Link: '],
  },
  {
    label: 'token',
    group: 'default',
    type: SettingType.multiple_text,
    value: ["eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzM0ODAwNjUyLCJqdGkiOiI0MWY3MjEyNC05YWQ0LTQ2NDEtODEzNi03MzUwY2Y1MjBjMjQiLCJ1c2VyX3V1aWQiOiI0ZWZmOWFiNi1lYTI3LTQ5MjQtOWU3NS04YTIzYTNhYTU1MTMifQ.XfA2AteEQ51DDxnmY0dA_SxrScbSKmZ-3rWbQV3rLWyfkrpDmy9ac15gJ7fLP4YNevdLuomtFoRFtZjTulONNg"],
  },
  {
    label: 'owner',
    group: 'default',
    type: SettingType.multiple_text,
    value: ['https://api.calendly.com/event_types/012345678901234567890'],
  },
  {
    label: 'owner_type',
    group: 'default',
    type: SettingType.multiple_text,
    value: ['EventType'],
  },
] as const satisfies PluginSetting[];

 