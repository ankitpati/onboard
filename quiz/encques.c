/* encques.c */
/* UTF-8 to ECMAScript String Converter
 *
 * Copyright 2010 Ankit Pati <ankitpati@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation;  either version 3 of the License, or (at your option)  any  later
 * version.
 *
 * This  program is distributed in the hope that it will be useful, but  WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR  A  PARTICULAR  PURPOSE.  See the GNU General  Public  License  for  more
 * details.
 *
 * You should have received a copy of the GNU General Public License along  with
 * this program; if not, see <http://www.gnu.org/licenses/>.
 *
 * The GPL v3 text can be found at <./gpl.txt>.
 */

#include <stdio.h>
#include <stdlib.h>

int htmlenc(FILE *in, FILE *out)
{
    int c;
    while((c = fgetc(in)) != EOF){
        if(ferror(in) || ferror(out)) return 1;
        switch(c){
        case '&':
            fprintf(out, "&amp;");
            break;
        case '\"':
            fprintf(out, "&quot;");
            break;
        case '\'':
            fprintf(out, "&apos;");
            break;
        case '<':
            fprintf(out, "&lt;");
            break;
        case '>':
            fprintf(out, "&gt;");
            break;
        case '\\':
            fprintf(out, "\\\\");
            break;
        default:
            fputc(c, out);
            break;
        }
    }
    return 0;
}

int ascienc(FILE *in, FILE *out)
{
    int c;
    while((c = fgetc(in)) != EOF){
        if(ferror(in) || ferror(out)) return 1;
        if(c != '\n') fprintf(out, "&#%u;", c);
        else fputc('\n', out);
    }
    return 0;
}

char *getstr()
{
    int c, n;
    char *s;
    if(!(s=(char*)malloc(1))) return NULL;
    for(n=0; (c=getchar())!=EOF && c!='\n'; s[n++]=c)
        if((s=(char*)realloc(s, n+2)) == NULL){
            free(s);
            return NULL;
        }
    s[n]='\0';
    return s;
}

int main(int argc, char **argv)
{
    FILE *in, *out;
    char *s;
    if(argc==3){
        if(!(in=fopen(*(argv+1), "r")) || !(out=fopen(*(argv+2), "w")))
            goto openerr;
        if(htmlenc(in, out)) goto ioerr;
    }
    else{
        printf("HTML String Encoder\n");
        printf("Enter Input Filename  : ");
        if(!(s=getstr())) goto allocerr;
        if(!(in=fopen(s, "r"))) goto openerr;
        printf("Enter Output Filename : ");
        free(s);
        if(!(s=getstr())) goto allocerr;
        if(!(out=fopen(s, "w"))) goto openerr;
        printf("Encode into:\n1 - Regular HTML\n2 - Full ASCII\n? ");
        free(s);
        if(!(s=getstr())) goto allocerr;
        switch(*s){
        case '1':
            if(htmlenc(in, out)) goto ioerr;
            break;
        case '2':
            if(ascienc(in, out)) goto ioerr;
            break;
        default:
            fprintf(stderr, "Invalid choice\nProgram terminates\n");
            break;
        }
        free(s);
    }
    fclose(in);
    fclose(out);
    return 0;
openerr:
    fprintf(stderr, "File open error!\nCore dumped!\n");
    exit(1);
ioerr:
    fprintf(stderr, "File IO error!\nCore dumped!\n");
    exit(2);
allocerr:
    fprintf(stderr, "Allocation error!\nCore dumped!\n");
    exit(3);
    return 0;
}
/* end of encques.c */
