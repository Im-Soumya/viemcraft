import { Abi } from 'viem';

export type GenerateCalldataParams = {
  abi: Abi;
  functionName: string;
  args: unknown[];
};
