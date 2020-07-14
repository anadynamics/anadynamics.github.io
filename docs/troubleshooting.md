---
id: troubleshooting
title: Troubleshooting
---

## Ubuntu linux installing

### The imported target "CGAL::CGAL_Qt5" references the file "/usr/lib/x86_64-linux-gnu/libCGAL_Qt5.so.11.0.1" but this file does not exist...

Some Ubuntu versions have a failed CMakeLists.txt. This line should fix it:

```
sudo apt-get install libcgal-qt5-dev
```

### target_compile_features specified unknown feature "cxx_std_17" for target "ANA2"

This shows up if you have a very old gcc compiler. ANA is written in C++17 and C++17 features are available since GCC 5, gcc's current version
is 10.1.

To update your gcc in a Ubuntu system add the ppa repository and update the APT database:
```
$ sudo add-apt-repository ppa:ubuntu-toolchain-r/test
$ sudo apt-get update
```

Then install the desired GCC and G++ versions:

```
$ sudo apt-get install gcc g++ gcc-10 g++-10
```

Now the new compiler version is available in the system by using a different command name (that is, gcc-10), but the default version,
the one that is executed with the command `gcc`, will still be the previous one. To change the default version executed with the `gcc`
command we have to configure the alternatives in the system.

First lets remove any previous configuration with:

```
$ sudo update-alternatives --remove-all gcc
```

Each alternative has a priority associated with it. When a link group is in automatic mode, the alternatives pointed to by members
of the group will be those which have the highest priority.

```
$ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-10 10 --slave /usr/bin/g++ g++ /usr/bin/g++-10
```

Once the different alternatives for the gcc package have been created then it can be configured with:

```
$ sudo update-alternatives --config gcc
```

And a menu will appear, from which you can choose the gcc version.
Then test the version executed with the gcc command:

```
g++ -v
```
