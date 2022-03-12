<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
     <!-- Favicon icon -->
     <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
     <link rel="stylesheet" href="vendor/chartist/css/chartist.min.css">
     <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
     <link href="vendor/owl-carousel/owl.carousel.css" rel="stylesheet">
     <link href="css/style.css" rel="stylesheet">
    <!-- Favicon icon -->

    <!-- Datatable -->
    <link href="vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
    <!-- Custom Stylesheet -->
    <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body>

    <div class="modal-dialog" role="document">
        <div class="modal-content" style="margin-top: 200px">
            <div class="modal-header">
                <h5 class="modal-title">Edit Category</h5>
                {{-- <button type="button" class="close" data-dismiss="modal"><span>&times;</span> --}}
                </button>
            </div>
            <div class="modal-body">
                <form method="post" action="{{ route('category.update',$category->id)}}" autocomplete="off" enctype="multipart/form-data">

                    <div class="form-group" style="margin-bottom: 15px">
                        @csrf
                        @method('PUT')
                        <label class="text-black font-w500">Category Name</label>
                        <input name="name" type="text" class="form-control" value="{{$category->name}}">
                    </div>


                    <div class="form-group" style="margin-bottom: 15px">
                        <label class="text-black font-w500">Description</label>
                        <input name="description" type="text" class="form-control" value="{{$category->description}}">
                    </div>


                    <div class="form-group" >
                        <label class="text-black font-w500">Image</label>
                        <input name="image" type="file" class="form-control" value="{{$category->image}}">
                    </div>
                    <br>
                    <div class="form-group">
                        <button style="margin-top: 20px; width:100%" type="submit" class="btn btn-primary"><b>EDIT</b> </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
</html>














