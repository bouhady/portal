import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={ styles.main }>
      <div className={ styles.header } aria-description="header">
        הר לעמק 2024
      </div>
      <div className={ styles.grid }>
        <iframe src='https://connect.garmin.com/modern/course/embed/275741798' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/275742049' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/275742194' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/275742394' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276151900' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276151997' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152096' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152198' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152272' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152354' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152430' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152542' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152614' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152724' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152773' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152865' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276152948' width='465' height='548'/>
        <iframe src='https://connect.garmin.com/modern/course/embed/276153037' width='465' height='548'/>
      </div>

    </main>
  );
}
