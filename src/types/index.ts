export type GetCreatePollCalldataParams = {
  pollQuestion: string;
  pollDuration: bigint;
  initialStake: bigint;
};

export type GetVoteCalldataParams = {
  pollId: bigint;
  vote: boolean;
  amount: bigint;
};

export type GetResolvePollCalldataParams = {
  pollId: bigint;
  outcome: boolean;
};

export type GetClaimRewardsCalldataParams = {
  pollId: bigint;
};

export type GetCalculateRewardsCalldataParams = {
  pollId: bigint;
  voter: string;
};
