import React from 'react'
import he from 'he';
import { EncodeUtilsProps } from '../interfaces/EncodeUtilsProps'

const EncodeUtils: React.FC<EncodeUtilsProps> = ({ text }) => {
    const decodedText = he.decode(text);
    return <>{decodedText}</>;
}

export default EncodeUtils