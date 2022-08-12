import './sideBar.scss';

function SideBar() {
  return (
    <div className="sideBar">
      <nav className="content">
        <ol>
          <li><a href="#">Profil</a></li>
          <li><a href="#">Panier d'achat</a></li>
          <li><a href="#">A propos de nous</a></li>
        </ol>
      </nav>
    </div>
  );
}

export default SideBar;
