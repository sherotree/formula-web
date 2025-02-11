import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { InlineMath } from 'react-katex';
import { Formula } from '../types';

interface FormulaDialogProps {
  formula: Formula;
  open: boolean;
  onClose: () => void;
}

const FormulaDialog: React.FC<FormulaDialogProps> = ({
  formula,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, pr: 6 }}>
        {formula.name}
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ my: 3, textAlign: 'center' }}>
          <InlineMath math={formula.latex} />
        </Box>
        <Typography variant='body1' gutterBottom>
          {formula.description}
        </Typography>

        {formula.explanation && (
          <>
            <Divider sx={{ my: 2 }} />

            {formula.explanation.image && (
              <Box sx={{ my: 2, textAlign: 'center' }}>
                <img
                  src={formula.explanation.image}
                  alt={formula.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            )}

            {formula.explanation.steps && (
              <Box sx={{ my: 2 }}>
                <Typography variant='h6' gutterBottom>
                  解题步骤
                </Typography>
                <List>
                  {formula.explanation.steps.map((step, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {formula.explanation.notes && (
              <Box sx={{ my: 2 }}>
                <Typography variant='h6' gutterBottom>
                  注意事项
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {formula.explanation.notes}
                </Typography>
              </Box>
            )}
          </>
        )}

        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label={formula.subject} color='primary' />
          <Chip label={formula.grade} />
          {formula.tags.map((tag) => (
            <Chip key={tag} label={tag} variant='outlined' />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FormulaDialog;
