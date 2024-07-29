import { useState } from 'react';

const Pagination = ({ page, lastPage, setPage }) => {
  const [inputPage, setInputPage] = useState('');

  const scrollTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };
    // FIRST DAN LAST PAGE
  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollTop();
  };
    // INPUT HALAMAN
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

  return (
    <>

      <div className="text-2xl flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
        {page > 1 && (
          <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">
            Prev
          </button>
        )}
        <p>
          {page} of {lastPage}
        </p>
        {page < lastPage && (
          <button onClick={handleNextPage} className="transition-all hover:text-color-accent">
            Next
          </button>
        )}
      </div>

      {page === 1 && (
      <div className='text-2xl flex justify-center items-center py-4 px-2 gap-4 text-color-primary'> 
          <input
          placeholder='Cari Halaman?'
          type="text"
          value={inputPage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="border text-color-secondary px-2 py-1 rounded text-sm" // Menambahkan class text-sm untuk ukuran teks lebih kecil
          style={{ width: '200px' }} // Menyesuaikan lebar input agar tetap terlihat baik
        >
        </input>
       <button onClick={handleGoToPage} type='numberic' className="text-color-secondary absolute pl-20 transition-all hover:text-color-accent">
          Go
        </button>
      </div>
      )}

      <div className="text-2xl flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
        {page >= 3 && (
          <button onClick={handleFirstPage} className="transition-all hover:text-color-accent">
            First Page
          </button>
        )}

        {page === 1 && (
          <button onClick={handleLastPage} className="transition-all hover:text-color-accent">
            Last Page
          </button>
        )}
      </div>

      
      

    </>
  );
};

export default Pagination;