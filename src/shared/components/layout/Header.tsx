import './header.css';

export default function Header () {
    return (
        <section className="header text-align-center">
            <h1 className="header-title color-quaternary">Le Prestige Français</h1>
            <div className="french-flag-part-1"></div>
            <div className="french-flag-part-2"></div>
            <div className="french-flag-part-3"></div>
        </section>
    );
}