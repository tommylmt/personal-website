/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
import type { ComponentCustomProperties } from 'vue';
import type { TestIds } from '@/utils/testIds.ts'

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $baseUrl: string;
        $testIds: typeof TestIds;
        $t(key: Key): TranslateResult;
    }
}
