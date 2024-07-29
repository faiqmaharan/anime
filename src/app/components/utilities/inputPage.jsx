
const inputPage = () =>{
    const handleInputChange = (e) => {
        setInputPage(e.target.value);
      };
    
      const handleGoToPage = () => {
        const newPage = parseInt(inputPage, 10);
        if (!isNaN(newPage) && newPage >= 1 && newPage <= lastPage) {
          setPage(newPage);
          scrollTop();
        }
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleGoToPage();
        }
      };
}

return(
    <div className='text-2xl flex justify-center items-center py-4 px-2 gap-4 text-color-primary'> 
          <input
          placeholder='Cari Halaman?'
          type="number"
          value={inputPage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="border text-color-secondary px-2 py-1 rounded text-sm" // Menambahkan class text-sm untuk ukuran teks lebih kecil
          style={{ width: '100px' }} // Menyesuaikan lebar input agar tetap terlihat baik
        />
       <button onClick={handleGoToPage} className="transition-all hover:text-color-accent">
          Go
        </button>
      </div>
)

export default inputPage