export const metadata =  {
   title : "Services | Technical Agency"
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{color: 'orangered'}}>This is  header of application</header>
        {children}
        <footer style={{color : 'orangered'}}>This is  footer of application</footer>
      </body>
    </html>
  );
}


