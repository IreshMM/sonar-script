import { ReposListForOrgResponseData } from "@octokit/types";
import { Octokit } from "@octokit/rest";

export async function processRepo(
  context: Octokit,
  repo: ReposListForOrgResponseData[0]
) {
  try {
    await context.repos.getCommit({
      owner: repo.owner.login,
      repo: repo.name,
      ref: "dev_protected",
    });

    // TODO
    // Create sonarqube project
  } catch (error) {
    console.log(`Repo ${repo.name} probably doesn't have dev_protected branch. Skipping..`);
  }

  console.log(`Repo "${repo.name}" processed!\n`);
}
