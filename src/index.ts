import { encodeFunctionData } from 'viem';
import { GenerateCalldataParams } from './types';

export function greet(name: string): string {
  return `${name}, welcome to viemcraft 🧶`;
}

export function generateCalldata({
  abi,
  functionName,
  args,
}: GenerateCalldataParams) {
  return encodeFunctionData({
    abi,
    functionName,
    args,
  });
}
