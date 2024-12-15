

export default function Header() {
    return (
      <div>
        <div className="bg-[#252B42] px-[50px] text-white flex justify-between items-center h-[60px]">
            <div className="flex gap-[20px]">

                <div className="flex gap-[10px]">
                    <i className="bi bi-telephone"></i>
                    <p>(225) 555-0118</p>
                </div>
                
                <div className="flex gap-[10px]">
                    <i className="bi bi-envelope"></i>
                    <p>michelle.rivera@example.com</p>
                </div>
            </div>
            <div>
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="flex gap-[5px]">
                <p>Follow Us :</p>
                <div className="flex gap-[10px]">
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-youtube"></i></a>
                    <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-twitter"></i></a>
                </div>
            </div>
        </div>
        <div>

        </div>
      </div>
    );
  }