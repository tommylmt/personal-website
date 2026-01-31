/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
import type { ComponentCustomProperties } from 'vue';

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $baseUrl: string;
        $t(key: Key): TranslateResult;
    }
}
