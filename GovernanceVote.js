class GovernanceVote {
  constructor() {
    this.proposals = new Map();
  }
  createProposal(id, content) {
    this.proposals.set(id, { content, votesFor: 0, votesAgainst: 0, voters: new Set() });
  }
  vote(id, address, support) {
    const prop = this.proposals.get(id);
    if (prop.voters.has(address)) return false;
    prop.voters.add(address);
    support ? prop.votesFor++ : prop.votesAgainst++;
    return true;
  }
}
module.exports = GovernanceVote;
