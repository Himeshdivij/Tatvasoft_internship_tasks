﻿
using BooksApi.Entities.Entities;
using BooksApi.Models;

namespace BooksApi.Services.Services.Interface
{
    public interface IBookService
    {
        void AddBook(Book book);
       
        Book? GetBookById(int id);
        Task InsertBook(BookDetails bookDetails);
        BookDetails GetBookDetailsById(int id);
    }
}
