"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Box from "@mui/material/Box";

const Calendar = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "35px" },
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        droppable={true}
        dayMaxEvents={true}
        events="https://fullcalendar.io/api/demo-feeds/events.json?overload-day"
      />
    </Box>
  );
};

export default Calendar;
