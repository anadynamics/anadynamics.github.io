---
id: install_instructions 
title: Installation instructions
---

ANA is written in C++17, so you'll need a supporting compiler.
ANA and ANA GUI have been tested on Mac OSX 10.11 (El Capitan) and Ubuntu 16.04.
Instructions for these GNU-based systems are very similar.

## Dependencies
First, download these dependencies:
#### Linux
```
sudo apt-get install cmake libnetcdf-dev libcgal-dev libboost-dev
```
We only need the _Program Options_ library from the boost libraries, so you can replace 
`libboost-dev` for `libboost-program-optionsx.xx.x` where *x.xx.x* is the current version
available in your package manager.

#### Mac OS X

```
brew tap homebrew/science
brew install cmake netcdf cgal boost
```
 - **cmake** is necessary if you plan to build from sources.
 - **libnetcdf-dev** to read Amber NetCDF trajectories. 
 - ANA gets its input through the Program Options boost library, so you'll need
**libboost-program-optionsX.XX.X**, *X.XX.X* being higher than *1.58.0*. 
 - Finally, Triangulations are possible thanks the CGAL library in **libcgal-dev**.

### Building from source.
Source code is available on the
[Download](https://github.com/anadynamics/ANA2/releases) section. Or you can
clone the repository:
```
git clone https://github.com/anadynamics/ANA2 --depth=1
mkdir ANA2/build
cd ANA2/build
cmake .. -Wno-dev
make -j 4
```
The flag `-j` tells make to compile in parallel, most systems can spare 4 cores.

ANA should work right away. Make sure the
environment variable **LD_LIBRARY_PATH** includes the
location where CGAL and Boost were installed. For debian-based Linux distributions, these are most likely: 
 - */usr/lib*
 - */usr/local/lib*
 - */usr/lib/x86_64-linux-gnu*
 - */usr/include/x86_64-linux-gnu*.

You probably want to move the ANA executable to a path included in your *PATH*
variable as well. For example, in the case of a debian-based Linux distribution: */usr/local/bin*.

## Windows 

ANA and its dependencies (Chemfiles, CGAL and Boost) also work on Windows but
there is currently no pre-compiled binary for Windows. 
An alternative is to run ANA inside the Windows 10 Bash environment.


