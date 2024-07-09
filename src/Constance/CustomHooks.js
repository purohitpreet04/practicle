import { useState, useEffect } from 'react';
import pako from 'pako';

const useBase64Decoder = (base64String) => {
  const [decodedData, setDecodedData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (base64String) {
      try {
       
        const binaryString = atob(base64String);
       
        const binaryArray = Uint8Array.from(binaryString, char => char.charCodeAt(0));
   
        const decompressedData = pako.inflate(binaryArray, { to: 'string' });
        console.log(decompressedData)
        setDecodedData(decompressedData);
        setError(null);
      } catch (e) {
        setDecodedData('');
        setError('Failed to decode and decompress string');
        console.error('Error decoding and decompressing string', e);
      }
    }
  }, [base64String]);

  return { decodedData, error };
};

export default useBase64Decoder;

