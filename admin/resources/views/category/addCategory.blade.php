@extends('layouts.master')
@section('content')

<div class="modal-dialog" role="document">
    <div class="modal-content" style="margin-top: 180px ; width:700px; ">
        <div class="modal-header">
            <h5 class="modal-title">Create Project</h5>
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form action="{{ route('category.store') }}" method="POST" autocomplete="off" enctype="multipart/form-data">
@csrf
                <div class="form-group">
                    <label class="text-black font-w500">Project Name</label>
                    <input name="name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">description</label>
                    <input name="description" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">image</label>
                    <input name="image" type="file" class="form-control">
                </div>
                {{-- <div class="form-group">
                    <label class="text-black font-w500">Deadline</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">Client Name</label>
                    <input type="text" class="form-control">
                </div> --}}
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">CREATE</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
