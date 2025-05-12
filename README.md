# DXF Generator
1. Feature:
    This program reads Excellom Drill Program and output a file with all of the X Y coordinate in the addCircle() commands.The file can be used in CAD softwares to generate drawings.

    - Read Pattern Step and Repeat R, M01, M02 command 
    - Read Step and Repeat R commmand (without M01, M02)
    - Read Multiple M25s
    - Read G93s
    - Read Zero Correction

2. File Input Requirement:
    - M25
    - G93X0Y0
    - End the program with M30
    - The program only reads 1 Diameter. The first line of the drill file starts with "T" will be assumed to be the diameter for all holes.

4. Future Development:
    - Read Multiple diameters
    - Read drill files that has no decimal points for XY
    - Read number of digits for all X and Y when reading XY coordinates
