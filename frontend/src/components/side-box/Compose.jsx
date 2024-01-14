import { Dialog,styled,Box, Typography, Button, FormControl } from '@mui/material'
import React,{ useRef,useState } from 'react'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const postmark = require('postmark');


const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  border-radius: 20px;
`;

export default function Compose({open,setOpen}) {
    const handleClose = () => {
        setOpen(false);
      };
    

      const fileInputRef = useRef(null);

      const handleFileIconClick = () => {
        fileInputRef.current.click();
      };
    
      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          console.log('Selected file:', selectedFile);
        }
      };
    
      const [sender, setSender] = useState('');
      const [recipient, setRecipient] = useState('');
      const [subject, setSubject] = useState('');
      const [body, setBody] = useState('');
    
      const sendEmail = async () => {
        try {
          const client = new postmark.ServerClient('YOUR_POSTMARK_API_KEY');
          const response = await client.sendEmail({
            From: sender,
            To: recipient,
            Subject: subject,
            TextBody: body,
          });
    
          console.log('Email sent successfully:', response);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
      };
    
  return (
    <Dialog open={open} onClose={handleClose}>
    <Component>
      <Typography style={{marginTop:'12px',marginLeft:'5%'}}>Send Email</Typography>
      <hr />
      <FormControl onSubmit={handleSubmit} style={{height:'55vh',width:'95%'}}>
        <label style={{fontSize:'18px',fontFamily:'sans-serif',marginLeft:'15px'}}>
          Sender:
          <input type="email" value={sender} onChange={(e) => setSender(e.target.value)} style={{outline:'none',fontSize:'18px',width:'60%',marginLeft:'30px',padding:'2px'}}/>
        </label>
        <br />
        <label  style={{fontSize:'18px',fontFamily:'sans-serif',marginLeft:'15px'}}>
          Recipient:
          <input type="email" value={recipient} onChange={(e) => setRecipient(e.target.value)} style={{outline:'none',fontSize:'18px',width:'60%',marginLeft:'12px',padding:'2px'}}/>
        </label>
        <br />
        <label  style={{fontSize:'18px',fontFamily:'sans-serif',marginLeft:'15px'}}>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} style={{outline:'none',fontSize:'18px',width:'60%',marginLeft:'28px',padding:'2px'}}/>
        </label>
        <br />
        <label  style={{fontSize:'18px',fontFamily:'sans-serif',marginLeft:'22px'}}>
          Body:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} style={{outline:'none',fontSize:'16px',width:'60%',marginLeft:'40px',padding:'2px'}}/>
        </label>
        <br />        
    <Box style={{marginTop:'20px',marginLeft:'15px',display:'flex',width:'100%',height:'55px',borderRadius:'10px',boxShadow: '3px 4px 36px -6px rgba(0,0,0,0.4)'}}>
        <Button variant='contained' style={{borderRadius:'10%',width:'100px',margin:'5px'}} type="submit"
        onClick={() => alert("Message sent successfully!")}
        >
        Send</Button>
        <Box style={{marginLeft:'50%',marginTop:'5px',padding:'5px',display:'flex'}}>
<Box style={{margin:'5px'}}><span onClick={handleFileIconClick} style={{ cursor: 'pointer' }}>
<FolderOpenIcon/> </span>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} /></Box>
      <Box style={{margin:'5px'}}><span onClick={handleFileIconClick} style={{ cursor: 'pointer' }}>
      <InsertLinkIcon/> </span>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} /></Box>
<Box style={{margin:'5px'}}><span onClick={handleFileIconClick} style={{ cursor: 'pointer' }}>
      <AttachFileIcon/></span>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} /></Box>
 
 </Box>
  </Box>

      </FormControl>
    </Component>


    </Dialog>
  )
}
