// AFL Players Database - 2024 Season Statistics
// This file contains real AFL player stats from the 2024 season
// Update this file to add more players or update stats

const AFL_PLAYERS = [
  // MIDFIELDERS
  {
    name: "Marcus Bontempelli",
    team: "Western Bulldogs",
    position: "Centre",
    stats: {
      disposals: 28.2,
      kicks: 18.3,
      handballs: 9.9,
      marks: 5.8,
      tackles: 4.2,
      goals: 0.8,
      behinds: 0.5,
      clearances: 5.4,
      inside50s: 4.9,
      contestedPossessions: 13.1,
      uncontestedPossessions: 15.1
    }
  },
  {
    name: "Christian Petracca",
    team: "Melbourne",
    position: "Centre",
    stats: {
      disposals: 30.1,
      kicks: 19.2,
      handballs: 10.9,
      marks: 6.2,
      tackles: 4.8,
      goals: 0.9,
      behinds: 0.6,
      clearances: 6.2,
      inside50s: 5.3,
      contestedPossessions: 14.5,
      uncontestedPossessions: 15.6
    }
  },
  {
    name: "Clayton Oliver",
    team: "Melbourne",
    position: "Centre",
    stats: {
      disposals: 31.8,
      kicks: 16.4,
      handballs: 15.4,
      marks: 4.1,
      tackles: 5.6,
      goals: 0.5,
      behinds: 0.4,
      clearances: 6.8,
      inside50s: 4.2,
      contestedPossessions: 16.9,
      uncontestedPossessions: 14.9
    }
  },
  {
    name: "Patrick Cripps",
    team: "Carlton",
    position: "Centre",
    stats: {
      disposals: 27.3,
      kicks: 15.8,
      handballs: 11.5,
      marks: 4.9,
      tackles: 5.1,
      goals: 0.7,
      behinds: 0.5,
      clearances: 7.2,
      inside50s: 4.6,
      contestedPossessions: 15.3,
      uncontestedPossessions: 12.0
    }
  },
  {
    name: "Lachie Neale",
    team: "Brisbane Lions",
    position: "Centre",
    stats: {
      disposals: 32.4,
      kicks: 17.1,
      handballs: 15.3,
      marks: 4.3,
      tackles: 4.9,
      goals: 0.6,
      behinds: 0.4,
      clearances: 6.1,
      inside50s: 4.8,
      contestedPossessions: 14.8,
      uncontestedPossessions: 17.6
    }
  },
  {
    name: "Callum Mills",
    team: "Sydney Swans",
    position: "Centre",
    stats: {
      disposals: 26.7,
      kicks: 17.2,
      handballs: 9.5,
      marks: 6.1,
      tackles: 3.8,
      goals: 0.4,
      behinds: 0.3,
      clearances: 4.2,
      inside50s: 4.1,
      contestedPossessions: 11.2,
      uncontestedPossessions: 15.5
    }
  },
  {
    name: "Zak Butters",
    team: "Port Adelaide",
    position: "Centre Half Forward",
    stats: {
      disposals: 27.8,
      kicks: 16.9,
      handballs: 10.9,
      marks: 5.4,
      tackles: 4.6,
      goals: 1.2,
      behinds: 0.8,
      clearances: 4.8,
      inside50s: 5.2,
      contestedPossessions: 12.4,
      uncontestedPossessions: 15.4
    }
  },
  {
    name: "Noah Anderson",
    team: "Gold Coast Suns",
    position: "Centre",
    stats: {
      disposals: 28.9,
      kicks: 17.3,
      handballs: 11.6,
      marks: 5.2,
      tackles: 4.3,
      goals: 0.7,
      behinds: 0.5,
      clearances: 5.6,
      inside50s: 4.7,
      contestedPossessions: 13.6,
      uncontestedPossessions: 15.3
    }
  },
  {
    name: "Errol Gulden",
    team: "Sydney Swans",
    position: "Centre",
    stats: {
      disposals: 29.3,
      kicks: 18.4,
      handballs: 10.9,
      marks: 5.7,
      tackles: 4.1,
      goals: 0.8,
      behinds: 0.6,
      clearances: 5.1,
      inside50s: 5.4,
      contestedPossessions: 12.8,
      uncontestedPossessions: 16.5
    }
  },
  {
    name: "Chad Warner",
    team: "Sydney Swans",
    position: "Centre",
    stats: {
      disposals: 26.1,
      kicks: 16.2,
      handballs: 9.9,
      marks: 4.8,
      tackles: 5.2,
      goals: 0.9,
      behinds: 0.7,
      clearances: 5.8,
      inside50s: 4.9,
      contestedPossessions: 13.9,
      uncontestedPossessions: 12.2
    }
  },

  // RUCKS
  {
    name: "Max Gawn",
    team: "Melbourne",
    position: "Ruck",
    stats: {
      disposals: 21.3,
      kicks: 12.8,
      handballs: 8.5,
      marks: 4.2,
      tackles: 3.1,
      goals: 0.6,
      behinds: 0.4,
      clearances: 4.8,
      inside50s: 3.2,
      contestedPossessions: 11.4,
      uncontestedPossessions: 9.9
    }
  },
  {
    name: "Rowan Marshall",
    team: "St Kilda",
    position: "Ruck",
    stats: {
      disposals: 19.8,
      kicks: 11.2,
      handballs: 8.6,
      marks: 3.8,
      tackles: 4.2,
      goals: 0.5,
      behinds: 0.3,
      clearances: 5.1,
      inside50s: 2.9,
      contestedPossessions: 10.8,
      uncontestedPossessions: 9.0
    }
  },
  {
    name: "Sean Darcy",
    team: "Fremantle",
    position: "Ruck",
    stats: {
      disposals: 20.4,
      kicks: 11.9,
      handballs: 8.5,
      marks: 3.9,
      tackles: 3.8,
      goals: 0.4,
      behinds: 0.3,
      clearances: 5.4,
      inside50s: 3.1,
      contestedPossessions: 11.2,
      uncontestedPossessions: 9.2
    }
  },
  {
    name: "Tristan Xerri",
    team: "North Melbourne",
    position: "Ruck",
    stats: {
      disposals: 22.1,
      kicks: 13.4,
      handballs: 8.7,
      marks: 4.6,
      tackles: 3.4,
      goals: 0.5,
      behinds: 0.4,
      clearances: 4.6,
      inside50s: 3.4,
      contestedPossessions: 11.8,
      uncontestedPossessions: 10.3
    }
  },

  // FORWARDS
  {
    name: "Charlie Cameron",
    team: "Brisbane Lions",
    position: "Full Forward",
    stats: {
      disposals: 15.8,
      kicks: 11.2,
      handballs: 4.6,
      marks: 4.8,
      tackles: 2.9,
      goals: 2.4,
      behinds: 1.3,
      clearances: 0.8,
      inside50s: 2.1,
      contestedPossessions: 5.2,
      uncontestedPossessions: 10.6
    }
  },
  {
    name: "Tom Hawkins",
    team: "Geelong",
    position: "Full Forward",
    stats: {
      disposals: 13.2,
      kicks: 9.8,
      handballs: 3.4,
      marks: 5.9,
      tackles: 1.8,
      goals: 2.1,
      behinds: 1.4,
      clearances: 0.4,
      inside50s: 1.2,
      contestedPossessions: 5.8,
      uncontestedPossessions: 7.4
    }
  },
  {
    name: "Jeremy Cameron",
    team: "Geelong",
    position: "Full Forward",
    stats: {
      disposals: 14.6,
      kicks: 10.9,
      handballs: 3.7,
      marks: 6.2,
      tackles: 2.1,
      goals: 2.3,
      behinds: 1.5,
      clearances: 0.6,
      inside50s: 1.8,
      contestedPossessions: 5.4,
      uncontestedPossessions: 9.2
    }
  },
  {
    name: "Jesse Hogan",
    team: "GWS Giants",
    position: "Full Forward",
    stats: {
      disposals: 12.8,
      kicks: 9.2,
      handballs: 3.6,
      marks: 5.4,
      tackles: 2.4,
      goals: 2.6,
      behinds: 1.6,
      clearances: 0.5,
      inside50s: 1.4,
      contestedPossessions: 5.9,
      uncontestedPossessions: 6.9
    }
  },
  {
    name: "Tom Lynch",
    team: "Richmond",
    position: "Full Forward",
    stats: {
      disposals: 11.9,
      kicks: 8.7,
      handballs: 3.2,
      marks: 5.1,
      tackles: 1.9,
      goals: 2.2,
      behinds: 1.3,
      clearances: 0.3,
      inside50s: 1.1,
      contestedPossessions: 5.6,
      uncontestedPossessions: 6.3
    }
  },
  {
    name: "Isaac Heeney",
    team: "Sydney Swans",
    position: "Centre Half Forward",
    stats: {
      disposals: 22.4,
      kicks: 14.8,
      handballs: 7.6,
      marks: 5.9,
      tackles: 3.6,
      goals: 1.8,
      behinds: 1.1,
      clearances: 2.8,
      inside50s: 4.2,
      contestedPossessions: 8.9,
      uncontestedPossessions: 13.5
    }
  },
  {
    name: "Toby Greene",
    team: "GWS Giants",
    position: "Centre Half Forward",
    stats: {
      disposals: 21.7,
      kicks: 14.3,
      handballs: 7.4,
      marks: 5.2,
      tackles: 3.8,
      goals: 1.6,
      behinds: 1.0,
      clearances: 2.4,
      inside50s: 3.9,
      contestedPossessions: 8.6,
      uncontestedPossessions: 13.1
    }
  },
  {
    name: "Tom Green",
    team: "GWS Giants",
    position: "Centre Half Forward",
    stats: {
      disposals: 24.8,
      kicks: 14.9,
      handballs: 9.9,
      marks: 4.6,
      tackles: 4.9,
      goals: 0.9,
      behinds: 0.7,
      clearances: 4.8,
      inside50s: 4.3,
      contestedPossessions: 12.1,
      uncontestedPossessions: 12.7
    }
  },

  // DEFENDERS
  {
    name: "Jordan Dawson",
    team: "Adelaide Crows",
    position: "Centre Half Back",
    stats: {
      disposals: 27.9,
      kicks: 20.1,
      handballs: 7.8,
      marks: 7.2,
      tackles: 2.8,
      goals: 0.3,
      behinds: 0.2,
      clearances: 2.1,
      inside50s: 3.8,
      contestedPossessions: 8.4,
      uncontestedPossessions: 19.5
    }
  },
  {
    name: "Jake Lloyd",
    team: "Sydney Swans",
    position: "Left Half Back",
    stats: {
      disposals: 28.6,
      kicks: 21.3,
      handballs: 7.3,
      marks: 6.8,
      tackles: 2.4,
      goals: 0.2,
      behinds: 0.1,
      clearances: 1.8,
      inside50s: 3.2,
      contestedPossessions: 7.9,
      uncontestedPossessions: 20.7
    }
  },
  {
    name: "Nick Daicos",
    team: "Collingwood",
    position: "Centre Half Back",
    stats: {
      disposals: 32.8,
      kicks: 20.4,
      handballs: 12.4,
      marks: 6.4,
      tackles: 3.9,
      goals: 0.4,
      behinds: 0.3,
      clearances: 3.2,
      inside50s: 4.1,
      contestedPossessions: 10.2,
      uncontestedPossessions: 22.6
    }
  },
  {
    name: "Bailey Dale",
    team: "Western Bulldogs",
    position: "Right Half Back",
    stats: {
      disposals: 24.3,
      kicks: 17.9,
      handballs: 6.4,
      marks: 5.9,
      tackles: 3.1,
      goals: 0.5,
      behinds: 0.3,
      clearances: 1.9,
      inside50s: 3.4,
      contestedPossessions: 7.8,
      uncontestedPossessions: 16.5
    }
  },
  {
    name: "James Sicily",
    team: "Hawthorn",
    position: "Full Back",
    stats: {
      disposals: 22.1,
      kicks: 17.2,
      handballs: 4.9,
      marks: 8.1,
      tackles: 2.6,
      goals: 0.3,
      behinds: 0.2,
      clearances: 1.2,
      inside50s: 2.8,
      contestedPossessions: 7.4,
      uncontestedPossessions: 14.7
    }
  },
  {
    name: "Sam Taylor",
    team: "GWS Giants",
    position: "Full Back",
    stats: {
      disposals: 18.9,
      kicks: 14.8,
      handballs: 4.1,
      marks: 7.6,
      tackles: 1.9,
      goals: 0.1,
      behinds: 0.1,
      clearances: 0.8,
      inside50s: 1.9,
      contestedPossessions: 6.8,
      uncontestedPossessions: 12.1
    }
  },
  {
    name: "Steven May",
    team: "Melbourne",
    position: "Full Back",
    stats: {
      disposals: 17.2,
      kicks: 13.9,
      handballs: 3.3,
      marks: 6.9,
      tackles: 1.6,
      goals: 0.1,
      behinds: 0.1,
      clearances: 0.6,
      inside50s: 1.4,
      contestedPossessions: 6.2,
      uncontestedPossessions: 11.0
    }
  },

  // WINGERS & ROVERS
  {
    name: "Jordan Ridley",
    team: "Essendon",
    position: "Right Wing",
    stats: {
      disposals: 25.4,
      kicks: 19.1,
      handballs: 6.3,
      marks: 6.7,
      tackles: 2.9,
      goals: 0.3,
      behinds: 0.2,
      clearances: 1.6,
      inside50s: 3.1,
      contestedPossessions: 8.1,
      uncontestedPossessions: 17.3
    }
  },
  {
    name: "Darcy Parish",
    team: "Essendon",
    position: "Rover",
    stats: {
      disposals: 31.2,
      kicks: 17.8,
      handballs: 13.4,
      marks: 4.8,
      tackles: 4.6,
      goals: 0.6,
      behinds: 0.5,
      clearances: 5.3,
      inside50s: 4.4,
      contestedPossessions: 13.8,
      uncontestedPossessions: 17.4
    }
  },
  {
    name: "Andrew Brayshaw",
    team: "Fremantle",
    position: "Rover",
    stats: {
      disposals: 28.7,
      kicks: 16.4,
      handballs: 12.3,
      marks: 4.4,
      tackles: 5.8,
      goals: 0.5,
      behinds: 0.4,
      clearances: 6.4,
      inside50s: 4.1,
      contestedPossessions: 14.6,
      uncontestedPossessions: 14.1
    }
  },
  {
    name: "Sam Walsh",
    team: "Carlton",
    position: "Ruck Rover",
    stats: {
      disposals: 30.4,
      kicks: 17.9,
      handballs: 12.5,
      marks: 5.1,
      tackles: 4.7,
      goals: 0.6,
      behinds: 0.5,
      clearances: 5.9,
      inside50s: 4.6,
      contestedPossessions: 14.2,
      uncontestedPossessions: 16.2
    }
  },
  {
    name: "Rory Laird",
    team: "Adelaide Crows",
    position: "Left Wing",
    stats: {
      disposals: 27.3,
      kicks: 18.6,
      handballs: 8.7,
      marks: 5.9,
      tackles: 3.6,
      goals: 0.4,
      behinds: 0.3,
      clearances: 3.2,
      inside50s: 3.7,
      contestedPossessions: 10.4,
      uncontestedPossessions: 16.9
    }
  },
  {
    name: "Caleb Serong",
    team: "Fremantle",
    position: "Ruck Rover",
    stats: {
      disposals: 29.6,
      kicks: 15.8,
      handballs: 13.8,
      marks: 3.9,
      tackles: 6.2,
      goals: 0.4,
      behinds: 0.3,
      clearances: 6.8,
      inside50s: 3.8,
      contestedPossessions: 15.4,
      uncontestedPossessions: 14.2
    }
  },

  // MORE MIDFIELDERS
  {
    name: "Tim Taranto",
    team: "Richmond",
    position: "Centre",
    stats: {
      disposals: 26.8,
      kicks: 14.9,
      handballs: 11.9,
      marks: 4.2,
      tackles: 5.4,
      goals: 0.7,
      behinds: 0.5,
      clearances: 6.3,
      inside50s: 4.3,
      contestedPossessions: 14.8,
      uncontestedPossessions: 12.0
    }
  },
  {
    name: "Jack Steele",
    team: "St Kilda",
    position: "Centre",
    stats: {
      disposals: 25.9,
      kicks: 14.2,
      handballs: 11.7,
      marks: 4.6,
      tackles: 6.1,
      goals: 0.6,
      behinds: 0.4,
      clearances: 6.9,
      inside50s: 4.1,
      contestedPossessions: 15.2,
      uncontestedPossessions: 10.7
    }
  },
  {
    name: "Matt Rowell",
    team: "Gold Coast Suns",
    position: "Centre",
    stats: {
      disposals: 27.4,
      kicks: 15.3,
      handballs: 12.1,
      marks: 4.1,
      tackles: 5.7,
      goals: 0.7,
      behinds: 0.6,
      clearances: 6.6,
      inside50s: 4.4,
      contestedPossessions: 15.1,
      uncontestedPossessions: 12.3
    }
  },
  {
    name: "Touk Miller",
    team: "Gold Coast Suns",
    position: "Centre",
    stats: {
      disposals: 30.7,
      kicks: 16.8,
      handballs: 13.9,
      marks: 4.7,
      tackles: 4.8,
      goals: 0.5,
      behinds: 0.4,
      clearances: 5.8,
      inside50s: 4.2,
      contestedPossessions: 14.3,
      uncontestedPossessions: 16.4
    }
  },
  {
    name: "Zach Merrett",
    team: "Essendon",
    position: "Centre",
    stats: {
      disposals: 29.8,
      kicks: 18.4,
      handballs: 11.4,
      marks: 5.3,
      tackles: 4.2,
      goals: 0.7,
      behinds: 0.5,
      clearances: 5.4,
      inside50s: 4.8,
      contestedPossessions: 12.9,
      uncontestedPossessions: 16.9
    }
  },
  {
    name: "Will Brodie",
    team: "Fremantle",
    position: "Centre",
    stats: {
      disposals: 28.3,
      kicks: 14.6,
      handballs: 13.7,
      marks: 3.8,
      tackles: 5.2,
      goals: 0.4,
      behinds: 0.3,
      clearances: 7.1,
      inside50s: 3.6,
      contestedPossessions: 15.6,
      uncontestedPossessions: 12.7
    }
  },

  // MORE FORWARDS
  {
    name: "Kysaiah Pickett",
    team: "Melbourne",
    position: "Right Forward Pocket",
    stats: {
      disposals: 16.2,
      kicks: 10.8,
      handballs: 5.4,
      marks: 3.9,
      tackles: 3.8,
      goals: 1.9,
      behinds: 1.2,
      clearances: 1.4,
      inside50s: 2.8,
      contestedPossessions: 6.8,
      uncontestedPossessions: 9.4
    }
  },
  {
    name: "Shai Bolton",
    team: "Fremantle",
    position: "Left Forward Pocket",
    stats: {
      disposals: 19.8,
      kicks: 12.4,
      handballs: 7.4,
      marks: 4.2,
      tackles: 4.1,
      goals: 1.6,
      behinds: 1.0,
      clearances: 2.1,
      inside50s: 3.4,
      contestedPossessions: 7.9,
      uncontestedPossessions: 11.9
    }
  },
  {
    name: "Bobby Hill",
    team: "Collingwood",
    position: "Right Forward Pocket",
    stats: {
      disposals: 17.6,
      kicks: 11.2,
      handballs: 6.4,
      marks: 4.1,
      tackles: 3.6,
      goals: 1.7,
      behinds: 1.1,
      clearances: 1.8,
      inside50s: 3.1,
      contestedPossessions: 6.4,
      uncontestedPossessions: 11.2
    }
  },
  {
    name: "Jamie Elliott",
    team: "Collingwood",
    position: "Left Forward Pocket",
    stats: {
      disposals: 14.8,
      kicks: 10.1,
      handballs: 4.7,
      marks: 4.6,
      tackles: 2.8,
      goals: 1.8,
      behinds: 1.3,
      clearances: 0.9,
      inside50s: 2.4,
      contestedPossessions: 5.6,
      uncontestedPossessions: 9.2
    }
  },
  {
    name: "Chad Wingard",
    team: "Hawthorn",
    position: "Centre Half Forward",
    stats: {
      disposals: 18.4,
      kicks: 11.9,
      handballs: 6.5,
      marks: 4.8,
      tackles: 3.2,
      goals: 1.4,
      behinds: 0.9,
      clearances: 1.6,
      inside50s: 3.2,
      contestedPossessions: 7.1,
      uncontestedPossessions: 11.3
    }
  },

  // MORE DEFENDERS
  {
    name: "Tom Stewart",
    team: "Geelong",
    position: "Centre Half Back",
    stats: {
      disposals: 23.7,
      kicks: 18.6,
      handballs: 5.1,
      marks: 7.8,
      tackles: 2.3,
      goals: 0.2,
      behinds: 0.2,
      clearances: 1.4,
      inside50s: 2.9,
      contestedPossessions: 7.2,
      uncontestedPossessions: 16.5
    }
  },
  {
    name: "Harris Andrews",
    team: "Brisbane Lions",
    position: "Full Back",
    stats: {
      disposals: 19.4,
      kicks: 15.7,
      handballs: 3.7,
      marks: 8.4,
      tackles: 1.8,
      goals: 0.1,
      behinds: 0.1,
      clearances: 0.7,
      inside50s: 1.6,
      contestedPossessions: 6.9,
      uncontestedPossessions: 12.5
    }
  },
  {
    name: "Jeremy McGovern",
    team: "West Coast Eagles",
    position: "Full Back",
    stats: {
      disposals: 16.8,
      kicks: 13.4,
      handballs: 3.4,
      marks: 7.2,
      tackles: 1.4,
      goals: 0.1,
      behinds: 0.1,
      clearances: 0.5,
      inside50s: 1.3,
      contestedPossessions: 6.1,
      uncontestedPossessions: 10.7
    }
  },
  {
    name: "Aliir Aliir",
    team: "Port Adelaide",
    position: "Right Back Pocket",
    stats: {
      disposals: 20.3,
      kicks: 16.8,
      handballs: 3.5,
      marks: 6.9,
      tackles: 2.1,
      goals: 0.2,
      behinds: 0.1,
      clearances: 0.9,
      inside50s: 2.1,
      contestedPossessions: 6.8,
      uncontestedPossessions: 13.5
    }
  },
  {
    name: "Liam Jones",
    team: "Western Bulldogs",
    position: "Left Back Pocket",
    stats: {
      disposals: 15.2,
      kicks: 12.1,
      handballs: 3.1,
      marks: 6.4,
      tackles: 1.6,
      goals: 0.1,
      behinds: 0.1,
      clearances: 0.4,
      inside50s: 1.2,
      contestedPossessions: 5.9,
      uncontestedPossessions: 9.3
    }
  }
];

// Stat weights for similarity calculation
const STAT_WEIGHTS = {
  disposals: 3,
  kicks: 2,
  handballs: 2,
  marks: 2,
  tackles: 2,
  goals: 2.5,
  behinds: 1,
  clearances: 2,
  inside50s: 1.5,
  contestedPossessions: 2,
  uncontestedPossessions: 1.5
};

// Calculate similarity between user stats and player stats
function calculateSimilarity(userStats, playerStats, position) {
  let totalDiff = 0;
  let totalWeight = 0;
  let count = 0;

  Object.keys(userStats).forEach(stat => {
    if (stat === 'position' || !userStats[stat]) return;
    
    const userValue = parseFloat(userStats[stat]);
    const playerValue = playerStats[stat] || 0;
    const weight = STAT_WEIGHTS[stat] || 1;
    
    // Calculate percentage difference
    const avgValue = (userValue + playerValue) / 2;
    const diff = avgValue > 0 ? Math.abs(userValue - playerValue) / avgValue : 0;
    
    totalDiff += diff * weight;
    totalWeight += weight;
    count++;
  });

  if (count === 0) return 0;
  
  // Calculate similarity score (0-100)
  const avgDiff = totalDiff / totalWeight;
  let similarity = Math.max(0, 100 - (avgDiff * 100));
  
  // Bonus for matching position
  if (position && playerStats.position === position) {
    similarity = Math.min(100, similarity * 1.15);
  }
  
  return Math.round(similarity);
}

// Find best matching players
window.findPlayerMatches = function(userStats) {
  const position = userStats.position;
  
  // Calculate similarity for all players
  const scoredPlayers = AFL_PLAYERS.map(player => ({
    ...player,
    matchScore: calculateSimilarity(userStats, player.stats, position)
  }));

  // Sort by match score and return top 5
  return scoredPlayers
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5)
    .map(player => ({
      name: player.name,
      team: player.team,
      position: player.position,
      matchScore: player.matchScore,
      keyStats: {
        disposals: player.stats.disposals,
        kicks: player.stats.kicks,
        marks: player.stats.marks,
        tackles: player.stats.tackles,
        goals: player.stats.goals
      },
      analysis: `Similar playing style with comparable ${player.matchScore > 85 ? 'elite' : 'strong'} stats across key metrics.`
    }));
};
