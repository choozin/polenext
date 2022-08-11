import { useState, useEffect } from 'react';

const styles = {

    quoteSpan: {
        color: '#444',
        backgroundColor: '#CCC',
        padding: '2px 10px',
        borderRadius: '3px',
    },

    quoteLabel: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '96%',
        marginBottom: '1rem',
        fontSize: '1.2rem',
    },

}

const QuoteDialogue = ({ close, product }) => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [size, setSize] = useState(product.sizes[0]);
    const [material, setMaterial] = useState(product.materials[0]);
    const [materialColor, setMaterialColor] = useState(product.materialColors[0]);
    const [printColor, setPrintColor] = useState(product.printColors[0]);
    const [inSetsOf, setInSetsOf] = useState(product.quantities[0]);
    const [quantity, setQuantity] = useState(product.minimumOrderQuantity);
    const [notes, setNotes] = useState("");

    const [emailMessage, setEmailMessage] = useState("Default message")

    const [sendButtonState, setSendButtonState] = useState('unsent');

    useEffect(() => {
        generateEmailMessage();
    }, [name, company, email, phone, product, notes])

    const generateEmailMessage = () => {
        setEmailMessage(
            "Quote requested from " + name + " of " + company + ". <br/> " +
            "Email: " + email + " <br/> " +
            "Phone: " + phone + " <br/> " +
            "Product: " + product.title + " <br/> " +
            "Size: " + size + " <br/> " +
            "Material: " + material + " <br/> " +
            "Material Colour: " + materialColor + " <br/> " +
            "Print Colour: " + printColor + " <br/> " +
            "In Sets Of: " + inSetsOf + " <br/> " +
            "Quantity: " + quantity + " <br/> " +
            "Extra Notes: " + notes + ""
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSendButtonState('sending')
        fetch(process.env.SENDEMAILPATH, {
            mode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            //
            body: JSON.stringify({
                from: { name: "File Submitted from " + name, address: 'collegeprocam@gmail.com' }, //process.env.SENDEMAILRECIPIENT },
                to: 'ctaylor17@outlook.com', //process.env.SENDEMAILRECIPIENT,
                message: emailMessage,
                date: new Date(),
            })
        }).then(() => {
            setSendButtonState('sent')
        })
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            zIndex: '100',
            background: 'rgba(0,0,0,0.7)',
        }}>
            <div style={{
                width: '95vw',
                maxWidth: '500px',
                height: '1200px',
                maxHeight: '88vh',
                border: 'solid 4px white',
                borderRadius: '1rem',
                background: '#EEE',
                zIndex: '100',
                overflowY: 'scroll',
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    padding: '1rem',
                    display: 'absolute',
                    float: 'right',
                    border: 'none',
                    borderBottomLeftRadius: '1rem',
                    backgroundColor: '#444',
                    color: '#DDD',
                    cursor: 'pointer',
                    zIndex: '20',
                }}
                    onClick={close}>Close
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }}>
                    <h3 style={{ marginTop: '-3rem', fontSize: '2rem', marginBottom: '0' }}>Get a Quote</h3>
                    <p style={{ maxWidth: '300px', textAlign: 'center' }}>Please provide some details about your quote for {product && product.title} so we can better serve you.</p>
                    {product && product.sizes && product.sizes.length > 0 && <label style={styles.quoteLabel}>
                        <span>Size:</span>
                        {
                            product && product.sizes && product.sizes.length > 1 ?
                                <select style={{ maxWidth: '180px' }} onChange={(e) => { setSize(e.target.value); generateEmailMessage() }} value={size}>
                                    {product.sizes.map((size) => {
                                        return <option>{size}</option>
                                    })}
                                </select>
                                :
                                <span style={styles.quoteSpan}>{product.sizes && product.sizes[0]}</span>
                        }
                    </label>}
                    {product && product.materials && product.materials.length > 0 && <label style={styles.quoteLabel}>
                        <span>{product && product.materialLabel}</span>
                        {
                            product && product.materials && product.materials.length > 1 ?
                                <select style={{ maxWidth: '180px' }} onChange={(e) => { setMaterial(e.target.value); generateEmailMessage() }} value={material}>
                                    {product.materials.map((material) => {
                                        return <option>{material}</option>
                                    })}
                                </select>
                                :
                                <span style={styles.quoteSpan}>{product.materials && product.materials[0]}</span>
                        }
                    </label>}
                    {product && product.materialColors && product.materialColors.length > 0 && <label style={styles.quoteLabel}>
                        <span>Product Color</span>
                        {
                            product && product.materialColors && product.materialColors.length > 1 ?
                                <select style={{ maxWidth: '180px' }} onChange={(e) => { setMaterialColor(e.target.value); generateEmailMessage() }} value={materialColor}>
                                    {product.materialColors.map((color) => {
                                        return <option>{color}</option>
                                    })}
                                </select>
                                :
                                <span style={styles.quoteSpan}>{product.materialColors && product.materialColors[0]}</span>
                        }
                    </label>}
                    {product && product.printColors && product.printColors.length > 0 && <label style={styles.quoteLabel}>
                        <span>{product && product.printLabel ? product.printLabel : 'Print Colour:'}</span>
                        {
                            product && product.printColors && product.printColors.length > 1 ?
                                <select style={{ maxWidth: '180px' }} onChange={(e) => { setPrintColor(e.target.value); generateEmailMessage() }} value={printColor}>
                                    {product.printColors.map((color) => {
                                        return <option>{color}</option>
                                    })}
                                </select>
                                :
                                <span style={styles.quoteSpan}>{product.printColors && product.printColors[0]}</span>
                        }
                    </label>}
                    {product && product.quantities && product.quantities.length > 0 && <label style={styles.quoteLabel}>
                        <span>{product && product.quantitiesLabel ? product.quantitiesLabel : 'Quantities:'}</span>
                        {
                            product && product.quantities && product.quantities.length > 1 ?
                                <select style={{ maxWidth: '180px' }} onChange={(e) => { setInSetsOf(e.target.value); generateEmailMessage() }} value={inSetsOf}>
                                    {product.quantities.map((quantity) => {
                                        return <option>{quantity}</option>
                                    })}
                                </select>
                                :
                                <span style={styles.quoteSpan}>{product.printColors && product.printColors[0]}</span>
                        }
                    </label>}
                    {product && product.minimumOrderQuantity && <label style={styles.quoteLabel}>
                        <span>Quantity:</span>
                        {
                            product && product.minimumOrderQuantity ? <input type="number" style={styles.quoteNumberPicker} min={product && product.minimumOrderQuantity && product.minimumOrderQuantity.substring(product.minimumOrderQuantity.search(/\d/), product.minimumOrderQuantity.indexOf(' ', product.minimumOrderQuantity.search(/\d/)))} placeholder={product && product.minimumOrderQuantity && product.minimumOrderQuantity.substring(product.minimumOrderQuantity.search(/\d/), product.minimumOrderQuantity.indexOf(' ', product.minimumOrderQuantity.search(/\d/))) + ' minimum'} onChange={(e) => { setQuantity(e.target.value); generateEmailMessage() }} value={quantity}></input>        //.length > 1 ?
                                /*<select style={{ maxWidth: '180px' }}>
                                    {product.printColors.map((color) => {
                                        return <option>{color}</option>
                                    })}
                                </select>*/
                                :
                                <input type="number" style={styles.quoteNumberPicker} />
                        }
                    </label>}
                </div>
                <div style={{ padding: '0.5rem', fontSize: '1.2rem', }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Your Name:&nbsp;&nbsp;</span>
                        <input type='text'
                            style={{
                                background: 'none',
                                border: 'none',
                                borderBottom: 'solid 1px #333',
                                fontSize: '1.2rem',
                                fontFamily: 'Courier New',
                                color: '#333',
                                width: '280px',
                            }}
                            onChange={(e) => { setName(e.target.value); generateEmailMessage() }}
                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Company:&nbsp;&nbsp;</span>
                        <input type='text'
                            style={{
                                background: 'none',
                                border: 'none',
                                borderBottom: 'solid 1px #333',
                                fontSize: '1.2rem',
                                fontFamily: 'Courier New',
                                color: '#333',
                                width: '280px',
                            }}
                            onChange={(e) => { setCompany(e.target.value); generateEmailMessage() }}
                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Email:&nbsp;&nbsp;</span>
                        <input type='text'
                            style={{
                                background: 'none',
                                border: 'none',
                                borderBottom: 'solid 1px #333',
                                fontSize: '1.2rem',
                                fontFamily: 'Courier New',
                                color: '#333',
                                width: '280px',
                            }}
                            onChange={(e) => { setEmail(e.target.value); generateEmailMessage() }}
                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Phone:&nbsp;&nbsp;</span>
                        <input type='text'
                            style={{
                                background: 'none',
                                border: 'none',
                                borderBottom: 'solid 1px #333',
                                fontSize: '1.2rem',
                                fontFamily: 'Courier New',
                                color: '#333',
                                width: '280px',
                            }}
                            onChange={(e) => { setPhone(e.target.value); generateEmailMessage() }}
                        />
                    </div>
                </div>
                <label style={styles.quoteLabel}>
                    <div style={{
                        width: '100%',
                        margin: '0 auto',
                        padding: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <span>Notes: </span>
                        <textarea cols='20' rows='8' placeholder='Enter any notes here...' onChange={(e) => { setNotes(e.target.value); generateEmailMessage() }} />
                    </div>
                </label>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', }}>
                    {
                        sendButtonState === 'unsent' ?
                            name.length > 1 && email.length > 4 ?
                                <button onClick={handleSubmit}>Request Quote</button>
                                :
                                <div>
                                    <span>Please complete the required fields.</span><br />
                                    <span style={{ fontSize: '70%', marginTop: '0' }}>(Your Name &amp; Email)</span>
                                </div>
                            :
                            sendButtonState === 'sending' ?
                                <span>Sending...</span>
                                :
                                sendButtonState === 'sent' ?
                                    <span>Sent</span>
                                    :
                                    <span>Error</span>
                    }
                </div>
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                opacity: '0',
                zIndex: '50',
            }} onClick={close} />
        </div>
    )
}

export default QuoteDialogue;