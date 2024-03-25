"use client";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { draggableData } from "@/components/StaticData/draggableData";
import style from "./style";

const DraggableCard = (): JSX.Element => {
  const theme = useTheme();
  const dragItem = useRef<any>();
  const dragOverItem = useRef<any>();

  const [cards, setCards] = useState(draggableData);

  const dragStart = (position: number) => {
    dragItem.current = position;
  };

  const dragEnter = (position: number) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyCardsItems = [...cards];
    const dragItemContent = copyCardsItems[dragItem.current];
    copyCardsItems.splice(dragItem.current, 1);
    copyCardsItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setCards(copyCardsItems);
  };

  return (
    <Box sx={style.container}>
      <Typography variant="h2" sx={{ marginBottom: "40px" }}>
        Draggable Card
      </Typography>

      <Grid container rowGap="20px" justifyContent="space-between">
        {cards.map((card, index: number) => (
          <Grid
            item
            xs={12}
            md={5.9}
            key={card.id}
            onDragStart={() => dragStart(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={drop}
            draggable
            className="card"
          >
            <Box sx={style.wrap}>
              <Typography variant="h3">{card.title}</Typography>
            </Box>

            <Box
              sx={{
                padding: "50px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                background: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6">{card.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DraggableCard;
