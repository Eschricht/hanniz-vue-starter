import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind';
import presetIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetTypography from '@unocss/preset-typography';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import type { Theme } from '@unocss/preset-wind';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirective(),
    transformerVariantGroup(),
  ],
  rules: [
    [
      /^grid-repeat-cols-(fit|fill)-(\w+)$/, ([, type, amount], { theme }: { theme: Theme }) => ({
        'grid-template-columns': `repeat(auto-${type}, minmax(${theme.width?.[amount] || '5px'}, 1fr))`,
      }),
    ],
    [
      /^grid--repeat-cols-(fit|fill)-(\d+)$/, ([, type, amount]) => ({
        'grid-template-columns': `repeat(auto-${type}, minmax(${Number.parseInt(amount, 10) / 4}rem, 1fr))`,
      }),
    ],
    [
      /^grid-repeat-cols-(fit|fill)-(\d+px)$/, ([, type, amount]) => ({
        'grid-template-columns': `repeat(auto-${type}, minmax(${Number.parseInt(amount, 10)}px, 1fr))`,
      }),
    ],
  ],
  theme: {
    fontFamily: {
      jost: 'Jost',
    },
  },
});
