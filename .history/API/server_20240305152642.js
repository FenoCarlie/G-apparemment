const port = process.env.PORT || 7000; // Use environment variable for port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
