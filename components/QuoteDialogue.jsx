import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

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

    const [name, setName] = useState();
    const [company, setCompany] = useState("N/A");
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState("N/A");

    const [size, setSize] = useState(product.sizes ? product.sizes.length > 0 ? product.sizes[0] : 'N/A' : 'N/A');
    const [material, setMaterial] = useState(product.materials ? product.materials.length > 0 ? product.materials[0] : 'N/A' : 'N/A');
    const [materialColor, setMaterialColor] = useState(product.materialColor ? product.materialColor.length > 0 ? product.materialColors[0] : 'N/A' : 'N/A');
    const [printColor, setPrintColor] = useState(product.printColors ? product.printColors.length > 0 ? product.printColors[0] : 'N/A' : 'N/A');
    const [inSetsOf, setInSetsOf] = useState(product.quantities ? product.quantities.length > 0 ? product.quantities[0] : 'N/A' : 'N/A');
    const [quantity, setQuantity] = useState(product.minimumOrderQuantity ? product.minimumOrderQuantity.length > 0 ? product.minimumOrderQuantity : 'N/A' : 'N/A');
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
                from: { name: name, address: 'collegeprocam@gmail.com' }, //process.env.SENDEMAILRECIPIENT },
                to: 'ctaylor17@outlook.com', //process.env.SENDEMAILRECIPIENT,
                message: emailMessage,
                base64Data: 'base64',
                subject: 'Quote Request - ' + product.title,
                date: new Date(),
                fileName: 'fileName',
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
                        {/*
                            product && product.minimumOrderQuantity ? <input type="number" style={styles.quoteNumberPicker} min={product && product.minimumOrderQuantity && Number(product.minimumOrderQuantity.substring(product.minimumOrderQuantity.search(/\d/), product.minimumOrderQuantity.indexOf(' ', product.minimumOrderQuantity.search(/\d/))))} placeholder={product && product.minimumOrderQuantity && product.minimumOrderQuantity.substring(product.minimumOrderQuantity.search(/\d/), product.minimumOrderQuantity.indexOf(' ', product.minimumOrderQuantity.search(/\d/))) + ' minimum'} onChange={(e) => { setQuantity(Number(e.target.value)); generateEmailMessage() }} value={Number(quantity)}></input>        //.length > 1 ?
                                :
                                <input type="number" style={styles.quoteNumberPicker} />*/
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
                            name && name.length > 1 && email && email.length > 4 ?
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whiteTap={{ scale: 0.95 }}
                                    style={{
                                        border: 'ridge 4px gold',
                                        backgroundColor: '#FFB',
                                        color: 'white',
                                        width: '7rem',
                                        cursor: 'pointer',
                                        padding: '0.5rem',
                                        marginBottom: '1rem',
                                        boxShadow: '0 0.1rem 1.5rem 0.2rem #FFD',
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '1.5rem',
                                        textShadow: '1px 1px gold, -1px 1px gold, 1px -1px gold, -1px -1px gold'
                                    }} onClick={handleSubmit}>Send File</motion.button>
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