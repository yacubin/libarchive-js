/*
 *
 *  Copyright (C) 2025  Yurii Yakubin (yurii.yakubin@gmail.com)
 *
 */

#ifndef _BITS_MCSMBS_STDLIB_H
#define _BITS_MCSMBS_STDLIB_H

#include <wasmux/types.h>
#include <wasmux/widechar.h>

#ifdef __cplusplus
extern "C" {
#endif

int wctomb(char* str, wchar_t wch);
size_t wcstombs(char* dst, const wchar_t* src, size_t dstlen);

int mblen(const char* str, size_t len);
int mbtowc(wchar_t* pwc, const char* str, size_t len);
size_t mbstowcs(wchar_t* dst, const char* src, size_t dstlen);

#ifdef __cplusplus
}
#endif

#endif /* _BITS_MCSMBS_STDLIB_H */
