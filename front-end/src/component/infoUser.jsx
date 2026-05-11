export default function InfoUser({ name = 'User', onLogOutHandler }) {

    return (
        <div className="info-user">
            <div className="foto-user">
                <img src="default.jpg" />
            </div>
            <div className="detail-user">
                <p>selamat datang </p>
                <p className="nama-user"><strong>{name}</strong></p>
                <button onClick={onLogOutHandler}>Log Out</button>
            </div>
        </div>
    );
}