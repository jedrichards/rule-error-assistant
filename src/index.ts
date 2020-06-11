import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'rule-error-assistant',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/debug-throws-error': { active: true },
        },
      },
    }
  },
]

export default assistant
