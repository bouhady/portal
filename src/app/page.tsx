"use client"

import styles from "./page.module.css";
import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  return (
    <main className={ styles.main }>
      <div className={ styles.header } aria-description="header">
        הר לעמק 2024
      </div>
      <div className={styles.buttons}>
        { tracks.map(track => (
          <Button
            key={ track.url }
            onClick={ () => setSelectedTrack(track) }
            variant={track === selectedTrack ? 'contained' : 'outlined'}
          >
            { track.name }
          </Button>
        )) }
      </div>
      <Button variant={"contained"} onClick={()=>window.open(selectedTrack.start)} > לתחנת החלפה {selectedTrack.name}</Button>
      <div className={ styles.grid }>
        <div className={ styles.links }>
          <iframe src={ selectedTrack.url } width='380' height='500'/>
        </div>
      </div>
    </main>
  );
}
const tracks = [
  { name: 'קטע 1', url: 'https://connect.garmin.com/modern/course/embed/275741798', start: 'https://maps.app.goo.gl/ohacB9PS1ZjYwugX8?g_st=iw' },
  { name: 'קטע 2', url: 'https://connect.garmin.com/modern/course/embed/275742049', start: 'https://maps.app.goo.gl/BB7JuX3mwENis8nf8?g_st=iw' },
  { name: 'קטע 3', url: 'https://connect.garmin.com/modern/course/embed/275742194', start: 'https://maps.app.goo.gl/jDVUotWPLrWcoeMw7?g_st=iw' },
  { name: 'קטע 4', url: 'https://connect.garmin.com/modern/course/embed/275742394', start: 'https://maps.app.goo.gl/aRosR1e3KYuF9Pog7?g_st=iw' },
  { name: 'קטע 5', url: 'https://connect.garmin.com/modern/course/embed/276151900', start: 'https://maps.app.goo.gl/wABDrJ64rHKVwCii7?g_st=iw' },
  { name: 'קטע 6', url: 'https://connect.garmin.com/modern/course/embed/276151997', start: 'https://maps.app.goo.gl/pYnAdjEWD5hAc5nGA?g_st=iw' },
  { name: 'קטע 7', url: 'https://connect.garmin.com/modern/course/embed/276152096', start: 'https://maps.app.goo.gl/W7yRipkX1axb2V6XA?g_st=iw' },
  { name: 'קטע 8', url: 'https://connect.garmin.com/modern/course/embed/276152198', start: 'https://maps.app.goo.gl/YJRVVT2u2UkKNmwC8?g_st=iw' },
  { name: 'קטע 9', url: 'https://connect.garmin.com/modern/course/embed/276152272', start: 'https://maps.app.goo.gl/DSm8vpLnDxr8CrTN7?g_st=iw' },
  { name: 'קטע 10', url: 'https://connect.garmin.com/modern/course/embed/276152354', start: 'https://maps.app.goo.gl/5miUpRZsMNiiJukp8?g_st=iw' },
  { name: 'קטע 11', url: 'https://connect.garmin.com/modern/course/embed/276152430', start: 'https://maps.app.goo.gl/jf2KG2eLxmLHCfV6A?g_st=iw' },
  { name: 'קטע 12', url: 'https://connect.garmin.com/modern/course/embed/276152542', start: 'https://maps.app.goo.gl/J29WAADs14VCHj69A?g_st=iw' },
  { name: 'קטע 13', url: 'https://connect.garmin.com/modern/course/embed/276152614', start: 'https://maps.app.goo.gl/AZBQhScEUNDGvJ449?g_st=iw' },
  { name: 'קטע 14', url: 'https://connect.garmin.com/modern/course/embed/276152724', start: 'https://maps.app.goo.gl/LL7EAGLjTD4P1BCK7?g_st=iw' },
  { name: 'קטע 15', url: 'https://connect.garmin.com/modern/course/embed/276152773', start: 'https://maps.app.goo.gl/DRpvjwP9NTEHpEfR9?g_st=iw' },
  { name: 'קטע 16', url: 'https://connect.garmin.com/modern/course/embed/276152865', start: 'https://maps.app.goo.gl/nEaQ58ejvfuVbSsA9?g_st=iw' },
  { name: 'קטע 17', url: 'https://connect.garmin.com/modern/course/embed/276152948', start: 'https://maps.app.goo.gl/5jA1RFz8muUN5s9k6?g_st=iw' },
  { name: 'קטע 18', url: 'https://connect.garmin.com/modern/course/embed/276153037', start: 'https://maps.app.goo.gl/qhjmTL4wfbrfML9w5?g_st=iw' },
]
