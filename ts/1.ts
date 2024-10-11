interface IParams {
  id?: string;
  version?: number;
  data?: Record<string, unknown>;
}

interface THook {
  checkData: (params: IParams) => { ret: number; msg: string; data?: any };
  onRuleDataChange: (params: IParams & { newData: Record<string, unknown> }) => Record<string, unknown>;
  generateOverview: (params: IParams) => string;
  priceCheck: (params: IParams) => { discount: number; tooCheap: boolean; productsId?: string[] };
  riskControlCheck: (params: IParams) => { products: []; modelExtend: Record<string, string> };
}

type TAsyncHook = {
  [K in keyof THook]: (params: Parameters<THook[K]>[0]) => Promise<ReturnType<THook[K]>>;
};

interface RuleFormHooksStruct extends TAsyncHook {
  cache: Record<string, number>;
  init: () => void;
  loadScript: (globalVarName: string) => Promise<number | void>;
  runHook: <k extends keyof THook>(
    params: { hookName: k; defaultData: ReturnType<THook[k]> } & Parameters<THook[k]>[0]
  ) => Promise<ReturnType<THook[k]>>;
}
