---
id: config
title: Configuration variables
---

## Terminal options
```
input_struct, s
```
 Input structure. This is the only positional argument so you can type it first and skip the flag
```
input_md, d
```
 Input file with MD simulation
```
config_file, c
```
 Filename of the configuration file
```
include, i
```
 Coordinates of the included area in PDB format
```
output_draw, f
```
 PDB output filename
```
output_vol, o
```
 Volume output filename
```
output_wall, w
```
 Cavity's wall atoms/residues output filename
```
NDD_modes, M
```
 Input vectors for Non-Delaunay dynamics (NDD)
```
NDD_frequencies, F
```
 Input frequencies (in cm^-1) to calculate the flexibility index by NDD
```
NDD_scaling, S
```
 Input scaling factors for NDD. See ANA's manual to understand why they are necessary
```
NDD_size, Z
```
 Scaling magnitude for the input vectors for NDD. Default: 1
 * Default: **1**
```
NDD_output, O
```
 Suffix for the NDD output file. The scaling magnitude will be the prefix
```
tool_check_CH, t
```
 Filename of output PDB displaying the included area
```
tool_pdb_to_ch, p
```
 Read the input PDB and write 'include.ANA' file with the vertices of its convex hull
```
tool_pdb_norm, n
```
 Read the input PDB and renumber its atoms and residues. Be aware that his tool won't fix every error in your PDB. Writes the output PDB to tool_pdb_norm
```
tool_aa_to_ca, a
```
 Write Calpha atoms indices for the included residues to stdout
```
ver, v
```
 Output version number
```
help, h
```
 Output help message

## Configuration file options

### Included area options
```
included_area_residues
```
 Amino acids that delimit the convex hull of the included area. Numbers from 1 to 9999 separated by commas spaces or tabs
```
included_area_atoms
```
 Atoms that delimit the convex hull of the included area. Numbers from 1 to 9999 separated by commas spaces or tabs
```
included_area_precision
```
 0: keep all cells that intersect in the included area. 1: prune the intersecting cells to keep only the voids that lie inside the included area. Default: 0
 * Default: **0**
```
sphere
```
 Read the input coordinates and write 'include_sphere.ANA' file with the requested pseudo sphere
```
cylinder
```
 Read the input coordinates and write 'include_cylinder.ANA' file with the requested pseudo cylinder
```
prism
```
 Read the input coordinates and write 'include_prism.ANA' file with the requested prism

### Useful options for outlining the desired cavity with ANA Static
```
included_residues
```
 Amino acids that line the desired cavity. Useful for discovering new cavities
```
minimum_number_of_vertices_to_include
```
 Minimum number of wall atoms of the included amino acids. Default: 2
 * Default: **2**

#### Clusters options
```
clusters_method
```
 Define the method to clusterize cells. none: don't group null areas. facets: group null areas if the tetrahedrons share facets. boxes: group null areas if the tetrahedrons bounding boxes intersect. Default: boxes
 * Default: **boxes**
```
clusters_min_size
```
 Minimum number of cells a cluster has to have to be included. Default: 2
 * Default: **2**

#### Accessible Surface Area options
```
ASA_discard_method
```
 Method for discarding cells according to solvent exposure. none: don't. cm: determine cells surrondings using the global CM as reference. backbone: draw a convex hull between the Calphas and discard every cell with its centroid outside(inside) the hull. axes: determine cells surrondings using its centroid and cartesian axes as references. Default: cm
 * Default: **cm**
```
ASA_only_side
```
 Which side to keep. inside: keep inside nulls. outside: keep outside nulls. Default: inside
 * Default: **inside**
```
ASA_exclude_residues
```
 Residues to exclude from the ASA algorithms
```
ASA_min_dot_pdt
```
 Minimum dot product to keep(discard) cell. As it increases more cells are classified as being outside. Default: 0.7
 * Default: **0.7**
```
ASA_max_dist
```
 Maximum distance between cell and Calpha used to keep cell. The bigger this number is the better (but slower) the process gets. Default: 15
 * Default: **15**

### MD options
```
start
```
 Frame to begin reading at. Default: 1
 * Default: **1**
```
step
```
 Step count to read trajectory frames. NetCDF format only. Default: 1
 * Default: **1**
```
stop
```
 Frame to stop reading. Reads the whole trajectory when set to 0. Default: 0
 * Default: **0**

### NDD options
```
NDD_step
```
 Number of steps in the NDD pipeline ANA will perform. 1: ANA will not perform the derivative and instead output 2 files with the volumes of the displaced cavity in the positive and the negative direction. 2: ANA will output the VGV. 3: ANA will output the flexibility index. Default: 3
 * Default: **3**
```
NDD_modes_format
```
 Format of the input vectors. amber: vectors will be read as Amber PCA modes. row: vectors will be read in row major order. column: vectors will be read in column major order. Default: row
 * Default: **row**
```
NDD_frequences_scaling
```
 If true ANA will scale the input vectors by their frequencies instead of automatically generating its own scaling factors. Default: false
 * Default: **false**

### Output options
```
output_type
```
 How to visualize output cavities. raw_pdb: null areas as tetrahedrons. raw_cgo: null areas as tetrahedrons formed with CGO lines in a pymol script. grid_pdb: null areas filled with points. grid_cgo: null areas filled with CGO spheres in a pymol script. Default: grid_pdb
 * Default: **grid_pdb**
```
sphere_count
```
 Sphere count for grid output. Default: 5
 * Default: **5**

### Misc options
```
min_vol_radius
```
 Radius of the sphere with the minimum volume to be taken into account. Default: 1.4
 * Default: **1.4**
```
max_area_radius
```
 Radius of the sphere with the maximum surface to be taken into account. Default: 99
 * Default: **99**
```
atom_only
```
 Triangulate only ATOM records. Default: true
 * Default: **true**
```
list_wall
```
 atom: output a file with the wall atoms. residue: output a file with the wall amino acids. none: don't. Default: none
```
separator
```
 Separator character for wall residues (atoms). +: might useful for pymol. Default: t
 * Default: **\t**
```
triangulate_only_included_aas
```
 Instead of triangulating the whole molecule triangulate only the included amino acids. Default: false
 * Default: **false**