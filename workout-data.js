const WORKOUT_DATA = [
  {
    id: "chest",
    name: "Chest",
    day: "Day 1",
    accent: "#2563EB",
    accentLight: "#DBEAFE",
    exercises: [
      { id: "chest_press",    name: "Chest Press Machine",        sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 50 },
      { id: "pec_deck",       name: "Pec Deck / Fly Machine",     sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 30 },
      { id: "inc_press",      name: "Incline Chest Press",        sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 40 },
      { id: "cable_cross",    name: "Cable Crossover (Low)",      sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 15 },
      { id: "dec_press",      name: "Machine Decline Press",      sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 45 },
    ],
    arms: {
      label: "Biceps Finisher",
      exercises: [
        { id: "c_curl_str",   name: "Cable Curl (straight bar)",  sets: 3, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 15 },
        { id: "preacher",     name: "Machine Preacher Curl",      sets: 3, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 20 },
        { id: "hammer",       name: "Cable Hammer Curl (rope)",   sets: 2, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 12 },
      ]
    }
  },
  {
    id: "legs",
    name: "Legs",
    day: "Day 2",
    accent: "#16A34A",
    accentLight: "#DCFCE7",
    exercises: [
      { id: "hack_squat",     name: "Hack Squat Machine",         sets: 4, minReps: 8,  maxReps: 10, increment: 2.5, defaultWeight: 60 },
      { id: "leg_press",      name: "Leg Press Machine",          sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 80 },
      { id: "leg_ext",        name: "Leg Extension Machine",      sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 40 },
      { id: "leg_curl",       name: "Leg Curl Machine",           sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 35 },
      { id: "hip_thrust",     name: "Hip Thrust Machine",         sets: 4, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 50 },
      { id: "calf_raise",     name: "Calf Raise Machine",         sets: 4, minReps: 15, maxReps: 20, increment: 2.5, defaultWeight: 50 },
    ],
    arms: {
      label: "Biceps + Triceps Finisher",
      exercises: [
        { id: "l_curl",       name: "Cable Curl (straight bar)",  sets: 2, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 15 },
        { id: "l_pushdown",   name: "Cable Pushdown (rope)",      sets: 2, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 15 },
        { id: "l_conc",       name: "Machine Concentration Curl", sets: 2, minReps: 15, maxReps: 20, increment: 1, defaultWeight: 10 },
        { id: "l_oh_ext",     name: "Overhead Cable Tricep Ext.", sets: 2, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 12 },
      ]
    }
  },
  {
    id: "shoulders",
    name: "Shoulders",
    day: "Day 3",
    accent: "#9333EA",
    accentLight: "#F3E8FF",
    exercises: [
      { id: "sh_press",       name: "Shoulder Press Machine",     sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 30 },
      { id: "lat_raise",      name: "Lateral Raise Machine",      sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 15 },
      { id: "rear_delt",      name: "Rear Delt Fly Machine",      sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 20 },
      { id: "face_pull",      name: "Cable Face Pull",            sets: 3, minReps: 15, maxReps: 20, increment: 2.5, defaultWeight: 12 },
      { id: "shrugs",         name: "Machine Shrugs",             sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 40 },
    ],
    arms: {
      label: "Triceps Finisher",
      exercises: [
        { id: "s_pushdown",   name: "Cable Pushdown (rope)",      sets: 3, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 15 },
        { id: "s_oh_ext",     name: "Overhead Cable Tricep Ext.", sets: 3, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 12 },
        { id: "s_tri_dip",    name: "Machine Tricep Dip",         sets: 2, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 25 },
      ]
    }
  },
  {
    id: "back",
    name: "Back",
    day: "Day 4",
    accent: "#DC2626",
    accentLight: "#FEE2E2",
    exercises: [
      { id: "lat_pull",       name: "Lat Pulldown Machine",       sets: 4, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 45 },
      { id: "seat_row",       name: "Seated Cable Row",           sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 40 },
      { id: "tbar_row",       name: "T-Bar Row Machine",          sets: 3, minReps: 10, maxReps: 12, increment: 2.5, defaultWeight: 35 },
      { id: "rev_fly",        name: "Machine Reverse Fly",        sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 20 },
      { id: "str_pull",       name: "Cable Straight-Arm Pulldown",sets: 3, minReps: 12, maxReps: 15, increment: 2.5, defaultWeight: 20 },
      { id: "pullup",         name: "Assisted Pull-Up Machine",   sets: 3, minReps: 8,  maxReps: 10, increment: 2.5, defaultWeight: 40 },
    ],
    arms: {
      label: "Triceps Finisher",
      exercises: [
        { id: "b_pushdown",   name: "Cable Pushdown (straight)",  sets: 3, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 12 },
        { id: "b_tri_dip",    name: "Machine Tricep Dip",         sets: 2, minReps: 12, maxReps: 15, increment: 1, defaultWeight: 25 },
        { id: "b_oh_ext",     name: "Overhead Cable Tricep Ext.", sets: 2, minReps: 15, maxReps: 20, increment: 1, defaultWeight: 10 },
      ]
    }
  }
];
