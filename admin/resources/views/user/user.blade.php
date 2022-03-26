@extends('layouts.master')
@section('content')

  <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
			<div class="container-fluid">
				<!-- Add Project -->
				<div class="modal fade" id="addProjectSidebar">
					<div class="modal-dialog" role="document">
						<div class="modal-content" style="margin-top: 200px">
							<div class="modal-header">
								<h5 class="modal-title">Create Project</h5>
								<button type="button" class="close" data-dismiss="modal"><span>&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label class="text-black font-w500">Project Name</label>
										<input type="text" class="form-control">
									</div>
									<div class="form-group">
										<label class="text-black font-w500">Deadline</label>
										<input type="date" class="form-control">
									</div>
									<div class="form-group">
										<label class="text-black font-w500">Client Name</label>
										<input type="text" class="form-control">
									</div>
									<div class="form-group">
										<button type="button" class="btn btn-primary">CREATE</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				 </div>
                 {{-- <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">

                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Table</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0)">Datatable</a></li>
                        </ol>
                    </div>
                 </div> --}}
<div class="col-12">
    <div class="card">
        {{-- <div class="card-header">
            <h4 class="card-title">Profile Datatable</h4>
        </div> --}}
        <div class="card-body">
            <div class="table-responsive">
                <table id="example3" class="display" style="min-width: 845px">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>image</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>phone</th>



                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($Userr as $user)
                        <tr>
                            <td><a style="text-decoration: none" href="javascript:void(0);"><strong>{{$user->id}}</strong></a></td>
                            <td><img class="rounded-circle" width="100" src="{{asset('http://localhost:3000/userImages/'.$user->image) }}" alt=""></td>
                            <td> {{$user->name}}</td>
                             <td> {{$user->email}}</td>
                             <td> {{$user->password}}</td>
                             <td> {{$user->phone}}</td>

                            {{-- <td><img class="rounded-circle" width="100" src="{{asset('/black/img/'.$product->p_image) }}" alt=""></td>
                            <td><img class="rounded-circle" width="100" src="{{asset('/black/img/'.$product->p_sup_image1) }}" alt=""></td>
                            <td><img class="rounded-circle" width="100" src="{{asset('/black/img/'.$product->p_sup_image2) }}" alt=""></td> --}}




                            <td>
                                <div class="d-flex">
                                {{-- <button style="border: none" type="button"><a href="{{route('userr.edit', $user->id)}}" class="btn btn-primary shadow btn-xs sharp mr-1 "><i class="fa fa-pencil"></i></a></button> --}}
                                    <form action="{{route('userr.destroy',$user->id)}}" method="POST">
                                        @csrf
                                        @method("delete")
                                        <button style="border: none"><a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a></button>
                                      </form>
                                </div>

                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</div>
</div>


@endsection
