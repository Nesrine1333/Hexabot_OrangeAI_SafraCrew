import { PluginSetting } from '@/plugins/types';
import { SettingType } from '@/setting/schemas/types';

export default [
  {
    label: 'CalendlyToken',
    group: 'default',
    type: SettingType.secret,
    value:
      'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzM0ODAwMDExLCJqdGkiOiIyYWRhZTAzMi0wODc1LTQ0MzQtODI4YS03MDk1NDg5OTM2MWYiLCJ1c2VyX3V1aWQiOiI2N2M4YmQ1OS1kNDMyLTRmMDctYmFiNS1kNmIzNjdmZTgwODQifQ.-6ilXo2Ce0P9uI2izqdNqFRCO3OXPFUx0ke36PsqgQSPxNG0SWnmU6WIdwNlCFkgdSLC_6MUa4DogXLhVEYguw',
  },
  {
    label: 'userUri',
    group: 'default',
    type: SettingType.text,
    value:
      'https://api.calendly.com/users/67c8bd59-d432-4f07-bab5-d6b367fe8084',
  },
] as const satisfies PluginSetting[];