import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetTypography from "@unocss/preset-typography";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
// import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
// import transformerCompileClass from "@unocss/transformer-compile-class";
import { myPreset } from "./uno.preset";

export default defineConfig({
    rules: [],
    shortcuts: [
        {
            logo: "i-logos-react w-6em h-6em transform transition-800 hover:rotate-180",
        },
    ],
    theme: {
        colors: {
            // ...
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
        myPreset,
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
});
