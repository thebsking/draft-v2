import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed(){
  const hashedPassword = await bcrypt.hash("king5505", 10);

  const user = await prisma.user.create({
    data:{
      email: "test@codebybk.com",
      name: "Test user",
      password: {
        create: {
          hash: hashedPassword
        },
      },
    },
  });

  await prisma.user.createMany({
    data: [
      {email: "team1@teams.com",name: "team 1"},
      {email: "team2@teams.com",name: "team 2"},
      {email: "team3@teams.com",name: "team 3"},
      {email: "team4@teams.com",name: "team 4"},
      {email: "team5@teams.com",name: "team 5"},
      {email: "team6@teams.com",name: "team 6"}
    ]
  })

  const team = await prisma.team.create({
    data:
      {
      name: "Available",
      userId: user.id,
    }
  });

  await prisma.player.createMany({
    data:[
      {
      rank: "1",
      name: "Christian McCaffrey",
      nflTeam: "CAR",
      position: "RB",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "2",
      name: "Jonathan Taylor",
      nflTeam: "IND",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "3",
      name: "Austin Ekeler",
      nflTeam: "LAC",
      position: "RB",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "4",
      name: "Dalvin Cook",
      nflTeam: "MIN",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "5",
      name: "Justin Jefferson",
      nflTeam: "MIN",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "6",
      name: "Najee Harris",
      nflTeam: "PIT",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "7",
      name: "Cooper Kupp",
      nflTeam: "LAR",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "8",
      name: "Derrick Henry",
      nflTeam: "TEN",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "9",
      name: "D'Andre Swift",
      nflTeam: "DET",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "10",
      name: "Travis Kelce",
      nflTeam: "KC",
      position: "TE",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "11",
      name: "Ja'Marr Chase",
      nflTeam: "CIN",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "12",
      name: "Joe Mixon",
      nflTeam: "CIN",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "13",
      name: "Stefon Diggs",
      nflTeam: "BUF",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "14",
      name: "Davante Adams",
      nflTeam: "LV",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "15",
      name: "Aaron Jones",
      nflTeam: "GB",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "16",
      name: "Saquon Barkley",
      nflTeam: "NYG",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "17",
      name: "Alvin Kamara",
      nflTeam: "NO",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "18",
      name: "CeeDee Lamb",
      nflTeam: "DAL",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "19",
      name: "Mark Andrews",
      nflTeam: "BAL",
      position: "TE",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "20",
      name: "Leonard Fournette",
      nflTeam: "TB",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "21",
      name: "Mike Evans",
      nflTeam: "TB",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "22",
      name: "Keenan Allen",
      nflTeam: "LAC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "23",
      name: "Tyreek Hill",
      nflTeam: "MIA",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "24",
      name: "Javonte Williams",
      nflTeam: "DEN",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "25",
      name: "Deebo Samuel",
      nflTeam: "SF",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "26",
      name: "Michael Pittman Jr.",
      nflTeam: "IND",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "27",
      name: "Nick Chubb",
      nflTeam: "CLE",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "28",
      name: "A.J. Brown",
      nflTeam: "PHI",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "29",
      name: "Tee Higgins",
      nflTeam: "CIN",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "30",
      name: "DJ Moore",
      nflTeam: "CAR",
      position: "WR",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "31",
      name: "James Conner",
      nflTeam: "ARI",
      position: "RB",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "32",
      name: "Kyle Pitts",
      nflTeam: "ATL",
      position: "TE",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "33",
      name: "Ezekiel Elliott",
      nflTeam: "DAL",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "34",
      name: "Diontae Johnson",
      nflTeam: "PIT",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "35",
      name: "Josh Allen",
      nflTeam: "BUF",
      position: "QB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "36",
      name: "Travis Etienne Jr.",
      nflTeam: "JAC",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "37",
      name: "Breece Hall",
      nflTeam: "NYJ",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "38",
      name: "Jaylen Waddle",
      nflTeam: "MIA",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "39",
      name: "David Montgomery",
      nflTeam: "CHI",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "40",
      name: "Terry McLaurin",
      nflTeam: "WAS",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "41",
      name: "Cam Akers",
      nflTeam: "LAR",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "42",
      name: "Justin Herbert",
      nflTeam: "LAC",
      position: "QB",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "43",
      name: "Brandin Cooks",
      nflTeam: "HOU",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "44",
      name: "Mike Williams",
      nflTeam: "LAC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "45",
      name: "Courtland Sutton",
      nflTeam: "DEN",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "46",
      name: "Patrick Mahomes II",
      nflTeam: "KC",
      position: "QB",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "47",
      name: "Allen Robinson II",
      nflTeam: "LAR",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "48",
      name: "George Kittle",
      nflTeam: "SF",
      position: "TE",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "49",
      name: "DK Metcalf",
      nflTeam: "SEA",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "50",
      name: "J.K. Dobbins",
      nflTeam: "BAL",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "51",
      name: "Lamar Jackson",
      nflTeam: "BAL",
      position: "QB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "52",
      name: "Darren Waller",
      nflTeam: "LV",
      position: "TE",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "53",
      name: "Josh Jacobs",
      nflTeam: "LV",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "54",
      name: "AJ Dillon",
      nflTeam: "GB",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "55",
      name: "Elijah Mitchell",
      nflTeam: "SF",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "56",
      name: "Marquise Brown",
      nflTeam: "ARI",
      position: "WR",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "57",
      name: "Michael Thomas",
      nflTeam: "NO",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "58",
      name: "Darnell Mooney",
      nflTeam: "CHI",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "59",
      name: "Antonio Gibson",
      nflTeam: "WAS",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "60",
      name: "Jerry Jeudy",
      nflTeam: "DEN",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "61",
      name: "Rashod Bateman",
      nflTeam: "BAL",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "62",
      name: "Amon-Ra St. Brown",
      nflTeam: "DET",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "63",
      name: "Chris Godwin",
      nflTeam: "TB",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "64",
      name: "Kyler Murray",
      nflTeam: "ARI",
      position: "QB",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "65",
      name: "Dalton Schultz",
      nflTeam: "DAL",
      position: "TE",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "66",
      name: "Chase Edmonds",
      nflTeam: "MIA",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "67",
      name: "Amari Cooper",
      nflTeam: "CLE",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "68",
      name: "JuJu Smith-Schuster",
      nflTeam: "KC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "69",
      name: "Jalen Hurts",
      nflTeam: "PHI",
      position: "QB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "70",
      name: "Clyde Edwards-Helaire",
      nflTeam: "KC",
      position: "RB",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "71",
      name: "Miles Sanders",
      nflTeam: "PHI",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "72",
      name: "Kareem Hunt",
      nflTeam: "CLE",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "73",
      name: "Elijah Moore",
      nflTeam: "NYJ",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "74",
      name: "Tony Pollard",
      nflTeam: "DAL",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "75",
      name: "Joe Burrow",
      nflTeam: "CIN",
      position: "QB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "76",
      name: "Adam Thielen",
      nflTeam: "MIN",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "77",
      name: "Damien Harris",
      nflTeam: "NE",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "78",
      name: "T.J. Hockenson",
      nflTeam: "DET",
      position: "TE",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "79",
      name: "Gabriel Davis",
      nflTeam: "BUF",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "80",
      name: "Rashaad Penny",
      nflTeam: "SEA",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "81",
      name: "Devin Singletary",
      nflTeam: "BUF",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "82",
      name: "Rhamondre Stevenson",
      nflTeam: "NE",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "83",
      name: "Dallas Goedert",
      nflTeam: "PHI",
      position: "TE",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "84",
      name: "Cordarrelle Patterson",
      nflTeam: "ATL",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "85",
      name: "Tom Brady",
      nflTeam: "TB",
      position: "QB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "86",
      name: "Russell Wilson",
      nflTeam: "DEN",
      position: "QB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "87",
      name: "Dak Prescott",
      nflTeam: "DAL",
      position: "QB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "88",
      name: "Melvin Gordon III",
      nflTeam: "DEN",
      position: "RB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "89",
      name: "DeVonta Smith",
      nflTeam: "PHI",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "90",
      name: "Hunter Renfrow",
      nflTeam: "LV",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "91",
      name: "Brandon Aiyuk",
      nflTeam: "SF",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "92",
      name: "Drake London",
      nflTeam: "ATL",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "93",
      name: "Zach Ertz",
      nflTeam: "ARI",
      position: "TE",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "94",
      name: "Ken Walker III",
      nflTeam: "SEA",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "95",
      name: "Tyler Lockett",
      nflTeam: "SEA",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "96",
      name: "Trey Lance",
      nflTeam: "SF",
      position: "QB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "97",
      name: "Christian Kirk",
      nflTeam: "JAC",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "98",
      name: "Matthew Stafford",
      nflTeam: "LAR",
      position: "QB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "99",
      name: "Allen Lazard",
      nflTeam: "GB",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "100",
      name: "Aaron Rodgers",
      nflTeam: "GB",
      position: "QB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "101",
      name: "DeAndre Hopkins",
      nflTeam: "ARI",
      position: "WR",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "102",
      name: "Robert Woods",
      nflTeam: "TEN",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "103",
      name: "Kadarius Toney",
      nflTeam: "NYG",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "104",
      name: "James Cook",
      nflTeam: "BUF",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "105",
      name: "Pat Freiermuth",
      nflTeam: "PIT",
      position: "TE",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "106",
      name: "Michael Carter",
      nflTeam: "NYJ",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "107",
      name: "Nyheim Hines",
      nflTeam: "IND",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "108",
      name: "Cole Kmet",
      nflTeam: "CHI",
      position: "TE",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "109",
      name: "Dameon Pierce",
      nflTeam: "HOU",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "110",
      name: "Dawson Knox",
      nflTeam: "BUF",
      position: "TE",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "111",
      name: "Kirk Cousins",
      nflTeam: "MIN",
      position: "QB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "112",
      name: "Darrell Henderson Jr.",
      nflTeam: "LAR",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "113",
      name: "Chase Claypool",
      nflTeam: "PIT",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "114",
      name: "Derek Carr",
      nflTeam: "LV",
      position: "QB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "115",
      name: "Treylon Burks",
      nflTeam: "TEN",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "116",
      name: "Alexander Mattison",
      nflTeam: "MIN",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "117",
      name: "Chris Olave",
      nflTeam: "NO",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "118",
      name: "Tyler Boyd",
      nflTeam: "CIN",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "119",
      name: "James Robinson",
      nflTeam: "JAC",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "120",
      name: "Jakobi Meyers",
      nflTeam: "NE",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "121",
      name: "J.D. McKissic",
      nflTeam: "WAS",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "122",
      name: "Kenneth Gainwell",
      nflTeam: "PHI",
      position: "RB",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "123",
      name: "Russell Gage",
      nflTeam: "TB",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "124",
      name: "Garrett Wilson",
      nflTeam: "NYJ",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "125",
      name: "Skyy Moore",
      nflTeam: "KC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "126",
      name: "Mike Gesicki",
      nflTeam: "MIA",
      position: "TE",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "127",
      name: "Jarvis Landry",
      nflTeam: "NO",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "128",
      name: "Hunter Henry",
      nflTeam: "NE",
      position: "TE",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "129",
      name: "Tua Tagovailoa",
      nflTeam: "MIA",
      position: "QB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "130",
      name: "DeVante Parker",
      nflTeam: "NE",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "131",
      name: "Rondale Moore",
      nflTeam: "ARI",
      position: "WR",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "132",
      name: "Marquez Valdes-Scantling",
      nflTeam: "KC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "133",
      name: "Isaiah Spiller",
      nflTeam: "LAC",
      position: "RB",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "134",
      name: "Jamaal Williams",
      nflTeam: "DET",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "135",
      name: "Noah Fant",
      nflTeam: "SEA",
      position: "TE",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "136",
      name: "Justin Fields",
      nflTeam: "CHI",
      position: "QB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "137",
      name: "Irv Smith Jr.",
      nflTeam: "MIN",
      position: "TE",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "138",
      name: "Kenny Golladay",
      nflTeam: "NYG",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "139",
      name: "DJ Chark Jr.",
      nflTeam: "DET",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "140",
      name: "Khalil Herbert",
      nflTeam: "CHI",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "141",
      name: "Albert Okwuegbunam",
      nflTeam: "DEN",
      position: "TE",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "142",
      name: "Trevor Lawrence",
      nflTeam: "JAC",
      position: "QB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "143",
      name: "Michael Gallup",
      nflTeam: "DAL",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "144",
      name: "Raheem Mostert",
      nflTeam: "MIA",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "145",
      name: "Tyler Allgeier",
      nflTeam: "ATL",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "146",
      name: "George Pickens",
      nflTeam: "PIT",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "147",
      name: "Julio Jones",
      nflTeam: "TB",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "148",
      name: "Tyler Higbee",
      nflTeam: "LAR",
      position: "TE",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "149",
      name: "Gerald Everett",
      nflTeam: "LAC",
      position: "TE",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "150",
      name: "Jahan Dotson",
      nflTeam: "WAS",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "151",
      name: "David Njoku",
      nflTeam: "CLE",
      position: "TE",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "152",
      name: "Robert Tonyan",
      nflTeam: "GB",
      position: "TE",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "153",
      name: "Rachaad White",
      nflTeam: "TB",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "154",
      name: "Jameis Winston",
      nflTeam: "NO",
      position: "QB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "155",
      name: "Evan Engram",
      nflTeam: "JAC",
      position: "TE",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "156",
      name: "Corey Davis",
      nflTeam: "NYJ",
      position: "WR",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "157",
      name: "Buffalo Bills",
      nflTeam: "BUF",
      position: "DS",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "158",
      name: "Brian Robinson Jr.",
      nflTeam: "WAS",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "159",
      name: "Tampa Bay Buccaneers",
      nflTeam: "TB",
      position: "DS",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "160",
      name: "Matt Ryan",
      nflTeam: "IND",
      position: "QB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "161",
      name: "Robbie Anderson",
      nflTeam: "CAR",
      position: "WR",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "162",
      name: "Marlon Mack",
      nflTeam: "HOU",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "163",
      name: "Nico Collins",
      nflTeam: "HOU",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "164",
      name: "Ronald Jones II",
      nflTeam: "KC",
      position: "RB",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "165",
      name: "Darrel Williams",
      nflTeam: "ARI",
      position: "RB",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "166",
      name: "Austin Hooper",
      nflTeam: "TEN",
      position: "TE",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "167",
      name: "San Francisco 49ers",
      nflTeam: "SF",
      position: "DS",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "168",
      name: "Gus Edwards",
      nflTeam: "BAL",
      position: "RB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "169",
      name: "Mecole Hardman",
      nflTeam: "KC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "170",
      name: "Mark Ingram II",
      nflTeam: "NO",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "171",
      name: "Van Jefferson",
      nflTeam: "LAR",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "172",
      name: "Indianapolis Colts",
      nflTeam: "IND",
      position: "DS",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "173",
      name: "Jameson Williams",
      nflTeam: "DET",
      position: "WR",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "174",
      name: "Ryan Tannehill",
      nflTeam: "TEN",
      position: "QB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "175",
      name: "Sony Michel",
      nflTeam: "MIA",
      position: "RB",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "176",
      name: "Joshua Palmer",
      nflTeam: "LAC",
      position: "WR",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "177",
      name: "Logan Thomas",
      nflTeam: "WAS",
      position: "TE",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "178",
      name: "Marvin Jones Jr.",
      nflTeam: "JAC",
      position: "WR",
      byeWeek: "11",
      teamId: team.id
      },
      {
      rank: "179",
      name: "D'Onta Foreman",
      nflTeam: "CAR",
      position: "RB",
      byeWeek: "13",
      teamId: team.id
      },
      {
      rank: "180",
      name: "Justin Tucker",
      nflTeam: "BAL",
      position: "K",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "181",
      name: "New Orleans Saints",
      nflTeam: "NO",
      position: "DS",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "182",
      name: "K.J. Osborn",
      nflTeam: "MIN",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "183",
      name: "Denver Broncos",
      nflTeam: "DEN",
      position: "DS",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "184",
      name: "New England Patriots",
      nflTeam: "NE",
      position: "DS",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "185",
      name: "Mac Jones",
      nflTeam: "NE",
      position: "QB",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "186",
      name: "Los Angeles Rams",
      nflTeam: "LAR",
      position: "DS",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "187",
      name: "Daniel Jones",
      nflTeam: "NYG",
      position: "QB",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "188",
      name: "Hayden Hurst",
      nflTeam: "CIN",
      position: "TE",
      byeWeek: "10",
      teamId: team.id
      },
      {
      rank: "189",
      name: "Tyler Bass",
      nflTeam: "BUF",
      position: "K",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "190",
      name: "Christian Watson",
      nflTeam: "GB",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "191",
      name: "Matt Gay",
      nflTeam: "LAR",
      position: "K",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "192",
      name: "Parris Campbell",
      nflTeam: "IND",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      },
      {
      rank: "193",
      name: "Jamison Crowder",
      nflTeam: "BUF",
      position: "WR",
      byeWeek: "7",
      teamId: team.id
      },
      {
      rank: "194",
      name: "KJ Hamler",
      nflTeam: "DEN",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "195",
      name: "Wan'Dale Robinson",
      nflTeam: "NYG",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "196",
      name: "Los Angeles Chargers",
      nflTeam: "LAC",
      position: "DS",
      byeWeek: "8",
      teamId: team.id
      },
      {
      rank: "197",
      name: "Dallas Cowboys",
      nflTeam: "DAL",
      position: "DS",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "198",
      name: "Zamir White",
      nflTeam: "LV",
      position: "RB",
      byeWeek: "6",
      teamId: team.id
      },
      {
      rank: "199",
      name: "Jalen Tolbert",
      nflTeam: "DAL",
      position: "WR",
      byeWeek: "9",
      teamId: team.id
      },
      {
      rank: "200",
      name: "Curtis Samuel",
      nflTeam: "WAS",
      position: "WR",
      byeWeek: "14",
      teamId: team.id
      }]
  })
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });