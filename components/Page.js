import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const Page = (props) => {

    return (
        <div style={{
            width: '100vw',
            minHeight: '100vh',
            backgroundColor: props.backgroundColor,
            backgroundImage: props.backgroundImage,
        }}>
            {props.content}
        </div>
    )

}

export default Page;