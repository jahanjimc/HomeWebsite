// ============================================================
//   ✏️  JAHANJI'S YOGA — EVENT SETTINGS (EDIT THIS FILE)
// ============================================================
//
//  HOW TO CHANGE DATES:
//  1. Find the event you want to edit below.
//  2. Change the "label" to the new date you want displayed.
//  3. Change the "time" if the timing is different.
//  4. Set "open" to true if registrations are open,
//                 false if registrations are closed.
//
//  ⚠️  IMPORTANT RULES:
//  - Keep the double quotes (" ") around all text.
//  - Don't delete any commas or curly braces { }.
//  - Only change the values after the colon (:).
//
//  ✅  EXAMPLE — Open registration:
//      open: true
//
//  ❌  EXAMPLE — Close registration:
//      open: false
//
// ============================================================

export const eventConfig = {

  // --- HOW MANY PEOPLE CAN JOIN ---
  // Change the number below (currently 35):
  capacity: 35,

  // --- SESSION LANGUAGE ---
  // Change the language below if needed:
  language: "English",

  // --- GOOGLE MAPS LINK ---
  // Paste your new Google Maps link here if the location changes:
  mapsLink: "https://maps.app.goo.gl/sW3JE1YKhsMDby9XA",

  // --- REGISTRATION FORM LINK ---
  // Paste your new Google Form link here if the form changes:
  formLink: "https://forms.gle/XfFMvDZT6pQKw7nM9",

  // --- ADDRESS ---
  // Change the address text below if the location changes:
  address: "16-1-143/2RT Saidabad Colony, Opposite Ramalayam Temple, Hyderabad 500059 TS",

  // ============================================================
  //   📅  EVENTS — Edit each event below
  // ============================================================
  events: [

    // --- EVENT 1 ---
    {
      label: "Thursday, February 26",   // ✏️ Change this date
      time:  "5:00 PM - 7:00 PM",       // ✏️ Change this time
      open:  true,                       // ✏️ true = open, false = closed
    },

    // --- EVENT 2 ---
    {
      label: "Friday, February 27",
      time:  "5:00 PM - 7:00 PM",
      open:  true,
    },

    // --- EVENT 3 ---
    {
      label: "Saturday, February 28",
      time:  "5:00 PM - 7:00 PM",
      open:  true,
    },

    // --- EVENT 4 ---
    {
      label: "Wednesday, March 5",
      time:  "5:00 PM - 7:00 PM",
      open:  true,
    },

    // --- EVENT 5 ---
    {
      label: "Thursday, March 6",
      time:  "5:00 PM - 7:00 PM",
      open:  true,
    },

    // --- EVENT 6 ---
    {
      label: "Friday, March 7",
      time:  "5:00 PM - 7:00 PM",
      open:  true,
    },

    // --- WANT TO ADD MORE EVENTS? ---
    // Copy the block below and paste it above this comment:
    //
    // {
    //   label: "Monday, March 10",
    //   time:  "5:00 PM - 7:00 PM",
    //   open:  true,
    // },

  ],

};
