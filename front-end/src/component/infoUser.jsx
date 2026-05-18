export default function InfoUser({ name = 'User', onLogOutHandler, isExpanded }) {
    return (
        <div className={`info-user ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="foto-user">
                <img src="default.jpg" />
            </div>
            {isExpanded && (
                <div className="detail-user">
                    <p className="nama-user"><strong>{name}</strong></p>
                    <button onClick={onLogOutHandler}>Log Out</button>
                </div>
            )}
        </div>
    );
}