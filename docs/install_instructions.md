---
id: install_instructions 
title: Installation instructions
---

First, get the binary or the source from the
[Download](https://github.com/lionixevolve/ana/releases) section.
ANA and ANA GUI have been tested on Mac OSX 10.11 (El Capitan) and Ubuntu 16.04.
Instructions for these GNU-based systems are very similar.


# Linux
First, download these dependencies:
```
sudo apt-get install cmake libnetcdf-dev libcgal-dev libboost-program-options1.58.0
```
**cmake** is only necessary if you plan to build from sources. **libnetcdf-dev**
to read Amber NetCDF trajectories. 
ANA gets its input through the Program Options boost library, so you'll need
**libboost-program-optionsX.XX.X**, *X.XX.X* being higher than *1.58.0*. 
Finally, Triangulations are possible thanks the CGAL library in **libcgal-dev**.

## Pre-compiled binaries.
A pre-compiled binary file (ANA) for 64-bits Ubuntu are available on the
[Download](https://github.com/lionixevolve/ana/releases) section.

If the dependencies are met, ANA should work right away. Make sure the
environment variable **LD_LIBRARY_PATH** includes the
location where CGAL and Boost were installed, these are most likely: */usr/lib*,
*/usr/local/lib*, */usr/lib/x86_64-linux-gnu* and */usr/include/x86_64-linux-gnu*.
You probably want to move the ANA executable to a path included in your *PATH*
variable as, for example, */usr/local/bin*.

## Building from source.
Source code is available on the
[Download](https://github.com/lionixevolve/ana/releases) section. After
installing the above dependencies, you are going to have to install
[Chemfiles](http://chemfiles.org/chemfiles/0.7.4/installation.html) too.
Everything is set to install a local modified version inside the ANA folder that
won't interfere with a potential global installation of the actual, official
Chemfiles library.

Inside the ANA folder, type:
```
cd chemfiles
mkdir install
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX=../install -DCHFL_SYSTEM_NETCDF=ON ..
cmake --build .
cmake --build . --target install
```
Then you can run the *deb_compile.sh* script:
```
cd ../../src
./deb_compile.sh
```
And you'll get an ANA executable inside the ANA folder. You may change the location of the Chemfiles installation by modifying
the **-DCMAKE_INSTALL_PREFIX** variable of the *cmake* command, and doing the same with the **ch_include**, **ch_lib** and **ch_static**
variables inside the *deb_compile.sh* script.

# Mac OS X

Dependencies:
```
brew tap homebrew/science
brew install cmake netcdf cgal boost
```

## Pre-compiled binaries

Pre-compiled binary (macANA) file for Mac OS X on the 
[Download](https://github.com/lionixevolve/ana/releases) section.

## Building from source.

Instructions for building Chemfiles from source in Mac and Linux are the same.
When you are done, you can run the *mac_compile.sh* script:
```
cd ../../src
./mac_compile.sh
```

# Windows 

ANA and its dependencies (Chemfiles, CGAL and Boost) also work on Windows but
there is currently no pre-compiled binary for Windows. 
An alternative is to run ANA inside the Windows 10 Bash environment.
