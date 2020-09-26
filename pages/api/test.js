export default (request, response) => {
    console.log('Here in request...');
    response.status(200).json({ message: 'All Set!' })
}