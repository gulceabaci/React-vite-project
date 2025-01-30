
export default function Footer() {
    const hours = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hours >= openHour && hours <= closeHour;
  
    return (
      <footer>
        {isOpen ? (
          <p>Akşam {closeHour}'e kadar sipariş verebilirsiniz.</p>
        ) : (
          <p>Şu an kapalıyız. Açılış saatimiz {openHour}</p>
        )}
      </footer>
    );
  }