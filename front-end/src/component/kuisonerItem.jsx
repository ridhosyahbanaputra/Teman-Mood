export default function KuisonerItem() {
    return (
        <div className="kuisoner-list">
            <p>jawablah pertanyaan berikut</p>
            <div className="option-group">
                <label>
                    <input type="radio" name="pertanyaan_1" value="opsi_1" />
                    opsi 1
                </label>
                <label>
                    <input type="radio" name="pertanyaan_1" value="opsi_2" />
                    opsi 2
                </label>
            </div>
        </div>
    );
}