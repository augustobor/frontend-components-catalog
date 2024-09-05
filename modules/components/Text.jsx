import React from 'react';

const Text = (type, content, theme) => {

  return (
    <ThemeProvider theme={theme || null}>
        <Typography variant={{ type }}>{{ content }}</Typography>
    </ThemeProvider>
  );
}

export default Text;
