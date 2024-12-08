import { Abi, encodeFunctionData, Hex, parseAbi } from 'viem';
import {
  GetCalculateRewardsCalldataParams,
  GetClaimRewardsCalldataParams,
  GetCreatePollCalldataParams,
  GetResolvePollCalldataParams,
  GetVoteCalldataParams,
} from './types';

export function generateAbi(functionName: string): Abi {
  return parseAbi([functionName]);
}

export function getCreatePollCalldata({
  pollQuestion,
  pollDuration,
  initialStake,
  token,
}: GetCreatePollCalldataParams): Hex {
  return encodeFunctionData({
    abi: generateAbi(
      'function createPoll(string _question, uint256 _duration, uint256 _initialStake, address token) external returns (uint256)'
    ),
    functionName: 'createPoll',
    args: [pollQuestion, pollDuration, initialStake, token],
  });
}

export function getVoteCalldata({
  pollId,
  vote,
  amount,
}: GetVoteCalldataParams): Hex {
  return encodeFunctionData({
    abi: generateAbi(
      'function vote(uint256 _pollId, bool _vote, uint256 _amount) external'
    ),
    functionName: 'vote',
    args: [pollId, vote, amount],
  });
}

export function getResolvePollCalldata({
  pollId,
  outcome,
}: GetResolvePollCalldataParams): Hex {
  return encodeFunctionData({
    abi: generateAbi(
      'function resolvePoll(uint256 _pollId, bool _outcome) external'
    ),
    functionName: 'resolvePoll',
    args: [pollId, outcome],
  });
}

export function getClaimRewardsCalldata({
  pollId,
}: GetClaimRewardsCalldataParams): Hex {
  return encodeFunctionData({
    abi: generateAbi('function claimReward(uint256 _pollId) external'),
    functionName: 'claimReward',
    args: [pollId],
  });
}

export function getCalculateRewardsCalldata({
  pollId,
  voter,
}: GetCalculateRewardsCalldataParams): Hex {
  return encodeFunctionData({
    abi: generateAbi(
      'function calculateReward(uint256 _pollId,address _voter) public view returns (uint256)'
    ),
    functionName: 'calculateReward',
    args: [pollId, voter],
  });
}
